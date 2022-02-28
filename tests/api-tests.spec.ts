import {test, expect} from '@playwright/test';

test.describe("API Testing", ()=>{
    const baseUrl = 'https://reqres.in/api'
    let response;
    let responseBody;
    let user_id = 1;
    let first_name = 'George';
    let last_name = 'Bluth';
    let user_email;
    let user_password = 'welcome';
    let user_token = 'QpwL5tke4Pnpja7X1';
    let missing_email_error = 'Missing email or username';
    let missing_password_error = 'Missing password';
    
    //Positive test
    test("API-TC01: Assert single user response status", async ({request})=>{
        response = await request.get(`${baseUrl}/users/2`);
        expect(response.status()).toBe(200);
        responseBody = JSON.parse(await response.text());
        console.log(responseBody);
    });

    //Negavtive test
    test("API-TC02: Assert single user invalid endpoint", async ({request})=>{
        response = await request.get(`${baseUrl}/users/2x`);
        responseBody = JSON.parse(await response.text());
        expect(response.status()).toBe(404);
        expect(responseBody).toBeEmpty;
    });

    //Positive test
    test('API-TC03: Get User details', async ({request})=>{
        response = await request.get(`${baseUrl}/users/${user_id}`);
        responseBody = JSON.parse(await response.text());
        expect(response.status()).toBe(200);
        expect(responseBody.data.id).toBe(user_id); 
        expect(responseBody.data.email).toBeTruthy();
        expect(responseBody.data.first_name).toBe(first_name);
        expect(responseBody.data.last_name).toBe(last_name);
        user_email = responseBody.data.email;
        
    });

    //Negative test
    test('API-TC04: Register user with email missing', async({request})=>{
        response = await request.post(`${baseUrl}/register`, {
            data:{
               password: user_password,
            },                
       });
       responseBody = JSON.parse(await response.text());
       expect(response.status()).toBe(400);
       expect(responseBody.error).toBe(missing_email_error);
    });

    //Negative test
    test('API-TC05: Register user with password missing', async({request})=>{
        response = await request.post(`${baseUrl}/register`, {
            data:{
               email: user_email,
            },                
       });
       responseBody = JSON.parse(await response.text());
       expect(response.status()).toBe(400);
       expect(responseBody.error).toBe(missing_password_error);
    });

    //Positive test
    test('API-TC06: Register successfuly user with valid email & password', async({request})=>{
        response = await request.post(`${baseUrl}/register`, {
            data:{
                email: user_email,
                password: user_password
            },                
       });
       responseBody = JSON.parse(await response.text());
       expect(response.status()).toBe(200);
       expect(responseBody.id).toBe(user_id);
       expect(responseBody.token).toBe(user_token);
    });

    //Negative test
    test('API-TC07: Login user with email missing', async({request})=>{
        response = await request.post(`${baseUrl}/login`, {
            data:{
               password: user_password
            },                
       });
       responseBody = JSON.parse(await response.text());
       expect(response.status()).toBe(400);
       expect(responseBody.error).toBe(missing_email_error);
    });

    //Negative test
    test('API-TC08: Login user with password missing', async({request})=>{
        response = await request.post(`${baseUrl}/login`, {
            data:{
               email: user_email
            },                
       });
       responseBody = JSON.parse(await response.text());
       expect(response.status()).toBe(400);
       expect(responseBody.error).toBe(missing_password_error);
    });

    //Positive test
    test('API-TC09: Login successfully user with valid email & password', async({request})=>{
        response = await request.post(`${baseUrl}/login`, {
            data:{
               email: user_email,
               password: user_password
            },                
       });
       responseBody = JSON.parse(await response.text());
       expect(response.status()).toBe(200);
       expect(responseBody.token).toBe(user_token);
    });
});