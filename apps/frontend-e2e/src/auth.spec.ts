import { expect, test } from '@playwright/test';

test.describe('Authentication', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/auth');
  });

  test('should display login form by default', async ({ page }) => {
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });

  test('should show validation error for invalid email', async ({ page }) => {
    await page.getByLabel('Email').fill('invalid-email');
    await page.getByLabel('Password').click(); // Trigger validation;

    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('should disable login button when form is invalid', async ({ page }) => {
    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeDisabled();
  });

  test('should enable login button when form is valid', async ({ page }) => {
    // The Login button is bound to loginForm.valid, so the form must be filled
    // with valid values before it enables.
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('somepassword');

    const loginButton = page.getByRole('button', { name: 'Login' });
    await expect(loginButton).toBeEnabled();
  });
});
