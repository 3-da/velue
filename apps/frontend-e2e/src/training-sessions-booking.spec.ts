import { expect, test } from '@playwright/test';

test.describe('Training Sessions Booking Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to training sessions page
    await page.goto('/training-sessions');
  });

  test('should display training sessions list', async ({ page }) => {
    // Verify session cards are displayed
    const sessionCards = page.locator('[data-testid="training-session-card"]');
    await expect(sessionCards.first()).toBeVisible();

    // Verify session details are visible
    const firstCard = sessionCards.first();
    await expect(firstCard.locator('[data-testid="session-type"]')).toBeVisible();
    await expect(firstCard.locator('[data-testid="session-trainer"]')).toBeVisible();
    await expect(firstCard.locator('[data-testid="session-datetime"]')).toBeVisible();
    await expect(firstCard.locator('[data-testid="session-spots"]')).toBeVisible();
  });

  test('should show authentication required message for unauthenticated users', async ({ page }) => {
    // Ensure user is not authenticated (clear storage)
    await page.context().clearCookies();

    // Try to book a session
    await page.click('[data-testid="book-session-btn"]');

    // Verify authentication warning message
    await expect(page.locator('.p-toast-message-warn')).toContainText('Authentication Required');
    await expect(page.locator('.p-toast-message-warn')).toContainText('Please sign in to book a session');
  });

  test('should successfully book a training session', async ({ page, context }) => {
    // Mock authentication
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'mock-jwt-token',
        domain: 'localhost',
        path: '/',
      },
    ]);

    // Navigate to training sessions
    await page.goto('/training-sessions');

    // Find an available session and book it
    const availableSession = page.locator('[data-testid="training-session-card"]').filter({
      has: page.locator('[data-testid="book-session-btn"]:not([disabled])'),
    }).first();

    // Click book button
    await availableSession.locator('[data-testid="book-session-btn"]').click();

    // Wait for success message
    await expect(page.locator('.p-toast-message-success')).toContainText('Booking Confirmed');
    await expect(page.locator('.p-toast-message-success')).toContainText('Your training session has been booked successfully');

    // Verify button text changed to "Cancel Booking"
    await expect(availableSession.locator('[data-testid="cancel-booking-btn"]')).toBeVisible();

    // Verify spots remaining shows a number
    await expect(availableSession.locator('[data-testid="session-spots"]')).toContainText(/\d+/);
  });

  test('should show error when booking without sufficient coins', async ({ page, context }) => {
    // Mock authentication with user having 0 coins
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'mock-jwt-token-no-coins',
        domain: 'localhost',
        path: '/',
      },
    ]);

    await page.goto('/training-sessions');

    // Try to book a session
    await page.click('[data-testid="book-session-btn"]');

    // Verify error message about insufficient coins
    await expect(page.locator('.p-toast-message-error')).toContainText('Booking Failed');
    await expect(page.locator('.p-toast-message-error')).toContainText('Insufficient coins');
  });

  test('should successfully cancel a booking', async ({ page, context }) => {
    // Mock authentication
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'mock-jwt-token',
        domain: 'localhost',
        path: '/',
      },
    ]);

    await page.goto('/training-sessions');

    // Find a session that user has already booked
    const bookedSession = page.locator('[data-testid="training-session-card"]').filter({
      has: page.locator('[data-testid="cancel-booking-btn"]'),
    }).first();

    // Click cancel booking button
    await bookedSession.locator('[data-testid="cancel-booking-btn"]').click();

    // Wait for success message
    await expect(page.locator('.p-toast-message-success')).toContainText('Booking Cancelled');
    await expect(page.locator('.p-toast-message-success')).toContainText('Your booking has been cancelled successfully');

    // Verify button text changed back to "Book Session"
    await expect(bookedSession.locator('[data-testid="book-session-btn"]')).toBeVisible();
  });

  test('should show error when canceling booking less than 24 hours before session', async ({ page, context }) => {
    // Mock authentication
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'mock-jwt-token',
        domain: 'localhost',
        path: '/',
      },
    ]);

    await page.goto('/training-sessions');

    // Find a session happening within 24 hours that user has booked
    const soonSession = page.locator('[data-testid="training-session-card"]').filter({
      has: page.locator('[data-testid="cancel-booking-btn"]'),
      hasText: /Today|Tomorrow/,
    }).first();

    // Try to cancel
    await soonSession.locator('[data-testid="cancel-booking-btn"]').click();

    // Verify error message about 24-hour policy
    await expect(page.locator('.p-toast-message-error')).toContainText('Cancellation Failed');
    await expect(page.locator('.p-toast-message-error')).toContainText('at least 24 hours in advance');
  });

  test('should disable book button when session is full', async ({ page }) => {
    await page.goto('/training-sessions');

    // Find a full session - test will fail if none exists, indicating test data needs setup
    const fullSession = page.locator('[data-testid="training-session-card"]').filter({
      hasText: /0 spots remaining|Full/,
    }).first();

    // Verify full session exists and button is disabled
    await expect(fullSession).toBeVisible();
    await expect(fullSession.locator('[data-testid="book-session-btn"]')).toBeDisabled();
    await expect(fullSession.locator('[data-testid="session-status-badge"]')).toContainText('Full');
  });

  test('should filter sessions by training type', async ({ page }) => {
    await page.goto('/training-sessions');

    // Click on training type filter dropdown
    await page.click('[data-testid="training-type-filter"]');

    // Select "SPINNING_BEGINNER"
    await page.click('[data-testid="filter-option-SPINNING_BEGINNER"]');

    // Verify all displayed sessions are SPINNING_BEGINNER
    const sessionTypes = page.locator('[data-testid="session-type"]');
    await expect(sessionTypes.first()).toContainText('Spinning Beginner');
  });

  test('should display sessions grouped by date', async ({ page }) => {
    await page.goto('/training-sessions');

    // Verify date groups are displayed
    const dateGroups = page.locator('[data-testid="date-group"]');
    await expect(dateGroups.first()).toBeVisible();

    // Verify each date group has a header and sessions
    const firstGroup = dateGroups.first();
    await expect(firstGroup.locator('[data-testid="date-header"]')).toBeVisible();
    await expect(firstGroup.locator('[data-testid="training-session-card"]').first()).toBeVisible();
  });

  test('should show coin balance and update after booking', async ({ page, context }) => {
    // Mock authentication
    await context.addCookies([
      {
        name: 'accessToken',
        value: 'mock-jwt-token',
        domain: 'localhost',
        path: '/',
      },
    ]);

    await page.goto('/training-sessions');

    // Get initial coin balance
    const coinBalance = page.locator('[data-testid="user-coin-balance"]');
    await expect(coinBalance).toBeVisible();
    const initialBalance = await coinBalance.textContent();
    const initialCoins = parseInt(initialBalance?.match(/\d+/)?.[0] || '0');

    // Book a session
    await page.click('[data-testid="book-session-btn"]');
    await expect(page.locator('.p-toast-message-success')).toBeVisible();

    // Verify coin balance decreased
    const updatedBalance = await coinBalance.textContent();
    const updatedCoins = parseInt(updatedBalance?.match(/\d+/)?.[0] || '0');
    expect(updatedCoins).toBeLessThan(initialCoins);
  });

  test('should handle network errors gracefully', async ({ page }) => {
    // Simulate network error by blocking API calls
    await page.route('**/api/training-sessions**', (route) => {
      void route.abort('failed');
    });

    await page.goto('/training-sessions');

    // Verify error message is displayed
    await expect(page.locator('.p-toast-message-error')).toBeVisible();
    await expect(page.locator('[data-testid="error-message"]')).toContainText('Failed to load training sessions');
  });

  test('should show trainer information correctly', async ({ page }) => {
    await page.goto('/training-sessions');

    const firstSession = page.locator('[data-testid="training-session-card"]').first();

    // Verify trainer name is displayed
    const trainerInfo = firstSession.locator('[data-testid="session-trainer"]');
    await expect(trainerInfo).toBeVisible();
    await expect(trainerInfo).toContainText(/\w+\s+\w+/);
  });
});
