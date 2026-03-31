import { test, expect } from '@playwright/test';

test.describe('Navegación e Interfaz Cyber-Brutalista', () => {
  test('La página carga metadata coherente y renderiza UI crítica', async ({ page }) => {
    await page.goto('/');
    
    // Validar Título SEO y render de Header 
    await expect(page).toHaveTitle(/Emiliano Herrera/);
    await expect(page.locator('h1')).toBeVisible();
    
    // Validar Navbar y comando ejectuable
    const navLogo = page.locator('nav a', { hasText: './Emiliano' });
    await expect(navLogo).toBeVisible();
  });

  test('Smooth Scrolling funciona en links semánticos de la Navbar', async ({ page }) => {
    await page.goto('/');
    
    // Click en 'Proyectos' y asegurar que la URL integre el Hash #projects
    const projLink = page.getByRole('link', { name: /Proyectos/i }).first();
    await projLink.click();
    await expect(page).toHaveURL(/.*#projects/);
    
    // Corroborar que la sección es visible
    const projSection = page.locator('#projects');
    await expect(projSection).toBeVisible();
  });
});
