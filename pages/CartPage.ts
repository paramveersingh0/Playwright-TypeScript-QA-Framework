import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private readonly page: Page) {}

  // Assert that a product with the given name appears in the cart.
  // Uses a scoped locator to avoid Playwright strict-mode failures when multiple items exist.
  async assertContainsProduct(name: string) {
    // Preferred: semantic locator for the product link (unique product names)
    const productLink = this.page.getByRole('link', { name });
    await expect(productLink).toBeVisible();

    // Alternative robust approach if you prefer to assert within inventory items:
    // const item = this.page.locator('[data-test="inventory-item"]').filter({ hasText: name });
    // await expect(item.first()).toBeVisible();
  }
}
