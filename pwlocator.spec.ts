import {test, expect,Locator} from "@playwright/test";
import { mkdtempDisposableSync } from "node:fs";

test("Test input action" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");

  const textBox: Locator=  page.locator("#name");

  await expect(textBox).toBeVisible();
  await expect(textBox).toBeEnabled();

    const maxLength: any = await  textBox.getAttribute("maxlength");// length ba char check kora

    expect(maxLength).toBe('15');

    await textBox.fill("john banega don");

    console.log("input value of the first name:", await textBox.inputValue()); //return the input value of textBox




await page.waitForTimeout(2000);


});
  

//Radio button

test("Test Radio Buttons" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");

   const radioMale:Locator  =page.locator("#male");

  await expect(radioMale).toBeVisible();
   await expect(radioMale).toBeEnabled();

      expect(await radioMale.isChecked()) .toBe(false) ;//raido button ki age thke fill kora ache ki na check kore.

   await radioMale.check();// radio button select koraa
      expect(await radioMale.isChecked()) .toBe(true); // select korar por check kora and true return korbe.




await page.waitForTimeout(2000);


});

//CheckBox

test.only("Test CheckBox selecting" ,async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");




   //use getByLevel for selectiong specific checkbox(sunday) and assert
   const checkBoxSunday: Locator=page.getByLabel('Sunday');

  await expect(checkBoxSunday).toBeVisible();

  // await checkBoxSunday.check();
  // expect(checkBoxSunday).toBeChecked();


// 2.selecting or capture  all checkBox(days of a week) and assert of  all checked
 //map use kobo for selecting for multipul  checkboxes select kokrar jonne
   const days: string[] =['sunday','Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];   //string nibo for all indexss

   const checkboxes:Locator[]=  days.map(index => page.getByLabel(index))

 expect(checkboxes.length).toBe(7);

 // for loop nibo for selecting one by one

 for(const checkbox of checkboxes)
 {
    await checkbox.check();

    expect(  await checkbox.isChecked());// selecting or not check koraa
 }

//tringgle select --- if check make uncheck, if uncheck make check

  for(const checkbox of checkboxes)
  {
    if( await checkbox.isChecked())// true
    {
     await checkbox.uncheck();
       await expect(checkbox).not.toBeChecked();
    }
    else{
      await checkbox.check();
       await expect(checkbox).toBeChecked();
    }
  }
 











// await page.waitForTimeout(5000);

// Randomly select the check box-- select checkbo(1.4,6)
 const index:any[]=[3,2,5];
 for( const i of index){
  await checkboxes[i].check();
 await  expect(checkboxes[i]).toBeChecked();
 }
  // await page.waitForTimeout(5000);




// seleting  checkbox base on the level


 const weekName:string="Sunday";

 for(const lavel of days)
  {
     if(lavel ===weekName ){
       const checkbox:any= page.getByLabel(lavel);

       checkbox.check();
      await  expect(checkbox).toBeChecked();
      
       await page.waitForTimeout(5000);

     }

 }

});



 















