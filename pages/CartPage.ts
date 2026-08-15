import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  async assertContainsProduct(name: string) {
    // 1. Locate the specific cart item row that contains the product name
    const productLocator = this.page
      .locator('[data-test="inventory-item"]')
      .filter({ hasText: name });

    // 2. Assert that this specific filtered locator is visible
    await expect(productLocator.first()).toBeVisible();
  }
}
