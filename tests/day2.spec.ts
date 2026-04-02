import {test,expect} from '@playwright/test';

test('testing login page',async({page})=>{

    await page.goto('https://automationexercise.com');

    await page.getByRole('link',{name:'Signup / Login'}).click();
  // Direct and extremely fast
await page.locator('[data-qa="login-email"]').fill('chari123@gmail.com');
await page.locator('[data-qa="login-password"]').fill('chari123');
    await page.getByRole('button',{name:'Login'}).click();

    await expect(page.getByText('Logged in as')).toBeVisible();

    await page.getByRole('link',{name:'Logout'}).click();

    await expect(page).toHaveURL('/login');
    await expect (page.getByText('Login to your account')).toBeVisible();


});