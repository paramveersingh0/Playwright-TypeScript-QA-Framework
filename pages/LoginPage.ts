import { expect, Locator, Page } from '@playwright/test';
export class LoginPage {
 readonly page:Page; readonly username:Locator; readonly password:Locator; readonly loginButton:Locator; readonly errorMessage:Locator;
 constructor(page:Page){this.page=page;this.username=page.getByTestId('username');this.password=page.getByTestId('password');this.loginButton=page.getByTestId('login-button');this.errorMessage=page.locator('[data-test="error"]');}
 async navigate(){await this.page.goto('/');}
 async login(username:string,password:string){await this.username.fill(username);await this.password.fill(password);await this.loginButton.click();}
 async assertLoginError(message:string){await expect(this.errorMessage).toContainText(message);}
}
