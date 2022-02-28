import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
    //Define selectors
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly actualMessage: Locator;
    readonly submitButton: Locator;
    readonly invalidUsernameError: string;
    readonly invalidPasswordError: string;
    readonly successMessage: string;

    //Initiate selectors using constructor
    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.actualMessage = page.locator('#flash');
        this.submitButton = page.locator("[type='submit']");
        this.invalidUsernameError = 'Your username is invalid!';
        this.invalidPasswordError = 'Your password is invalid!';
        this.successMessage = 'You logged into a secure area!';
    }
    /**
     * Define Login page methods
     */

    //Visit Login Page
    async visit() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    //Perform Login
    async login(username: string, password: string){
        await this.usernameInput.type(username);
        await this.passwordInput.type(password);
        await this.submitButton.click();
    }

    //Assert the error/success message shown on the screen
    async assertMessage(expectedMessage:string){
        await expect(this.actualMessage).toContainText(expectedMessage);
    }
}