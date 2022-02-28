import {test, expect} from '@playwright/test';
import {LoginPage} from '../page-objects/LoginPage';


test.describe('Login Tests', ()=>{
    let loginPage: LoginPage;
    //Before Hook
    test.beforeEach(async ({page})=>{
        loginPage = new LoginPage(page);
        await loginPage.visit(); 
    }); 
    //Negative scenario
    test('UI-TC-01: Login without passing any credentials', async ({page})=>{
        await loginPage.login('',''); 
        await loginPage.assertMessage(loginPage.invalidUsernameError);
        await page.waitForLoadState();
    });
    //Negative scenario
    test('UI-TC-02: Login with valid username & incorrect password', async ({page})=>{
        await loginPage.login('tomsmith', 'SecretPassword');        
        await loginPage.assertMessage(loginPage.invalidPasswordError);
        await page.waitForLoadState();
    });
    //Positive scenario
    test('UI-TC-03: Successful login with valid credentials', async ({page})=>{
        await loginPage.login('tomsmith', 'SuperSecretPassword!');
        await loginPage.assertMessage(loginPage.successMessage);        
        await page.waitForLoadState();
    });
});