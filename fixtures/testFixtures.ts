import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; import { ProductsPage } from '../pages/ProductsPage';
type Fixtures={loginPage:LoginPage;productsPage:ProductsPage};
export const test=base.extend<Fixtures>({loginPage:async({page},use)=>use(new LoginPage(page)),productsPage:async({page},use)=>use(new ProductsPage(page))});
export {expect} from '@playwright/test';
