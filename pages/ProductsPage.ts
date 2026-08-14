import { expect, Locator, Page } from '@playwright/test';
export class ProductsPage {
 readonly page:Page; readonly title:Locator; readonly productItems:Locator; readonly cartLink:Locator;
 constructor(page:Page){this.page=page;this.title=page.getByText('Products',{exact:true});this.productItems=page.locator('[data-test="inventory-item"]');this.cartLink=page.locator('[data-test="shopping-cart-link"]');}
 async assertLoaded(){await expect(this.title).toBeVisible();}
 async addProductByName(name:string){const product=this.productItems.filter({hasText:name});await product.getByRole('button',{name:/add to cart/i}).click();}
 async openCart(){await this.cartLink.click();}
}
