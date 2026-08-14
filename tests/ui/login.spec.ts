import {test,expect} from '../../fixtures/testFixtures'; import {users} from '../../utils/testData';
test.describe('Login',()=>{
test('@smoke valid user can log in',async({loginPage,productsPage})=>{await loginPage.navigate();await loginPage.login(users.valid.username,users.valid.password);await productsPage.assertLoaded();});
test('@regression locked user cannot log in',async({loginPage})=>{await loginPage.navigate();await loginPage.login(users.locked.username,users.locked.password);await loginPage.assertLoginError('Sorry, this user has been locked out.');});
test('@regression invalid credentials show an error',async({loginPage})=>{await loginPage.navigate();await loginPage.login('invalid_user','invalid_password');await expect(loginPage.errorMessage).toBeVisible();});});
