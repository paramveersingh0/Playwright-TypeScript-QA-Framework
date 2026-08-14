import { expect, Page } from '@playwright/test';
export class CartPage { constructor(private readonly page:Page){} async assertContainsProduct(name:string){await expect(this.page.locator('[data-test="inventory-item"]')).toContainText(name);} }
