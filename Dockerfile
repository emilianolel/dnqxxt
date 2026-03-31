# STAGE 1: Install dependencies
FROM node:20-alpine AS deps
# Inyección de dependencias para libc y un manejador ligero OS-signal
RUN apk add --no-cache libc6-compat dumb-init
WORKDIR /app

COPY package.json package-lock.json* ./
# Optimización extrema CI: montaje de caché temporal nativo de Docker BuildKit 
# Solo descarga librerías si cambian realmente el lockfile
RUN --mount=type=cache,target=/root/.npm npm ci

# STAGE 2: Build the application
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Standalone emit en next.config.ts genera el server trace ideal.
RUN npm run build

# STAGE 3: Production runner
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
# Traspaso del binario kill-signal seguro
COPY --from=deps /usr/bin/dumb-init /usr/bin/dumb-init

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Traemos el standalone magro y la pre-render static caché
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# ENTRYPOINT inteligente envuelto que enruta OS signals al server JS para un graceful shutdown seguro
ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["node", "server.js"]
