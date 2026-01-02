 import{test,expect,Locator} from "@playwright/test";
import { enableCompileCache } from "module";
import { text } from "stream/consumers";

 test("verify the radio button", async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/2018/09/automation-form.html");

//  const textbox: Locator = page.locator("#name");

//  await expect(textbox).toBeVisible();
//  await expect(textbox).toBeEnabled();

//   const maxLength:any = await textbox.getAttribute('maxlength');

//   expect(maxLength).toBe('15');

//    const placeholder:any  =await textbox.getAttribute("placeholder");
//     expect(placeholder).toBe('Enter Name');


//     await textbox.fill('john banbega don');

//     console.log("print the firstname of textbox:" , await textbox.inputValue());

//     // Radio button check

//      const radiomale:Locator  = page.locator("#male");

//      await radiomale.check();
//     await expect(radiomale).toBeChecked();

//         const radiofemale:Locator=page.locator("#female");
//          await radiofemale.check();
//          expect(radiofemale).toBeChecked();// true result dibe oita dekhbbo

  
//        // checkbox select kora

//         const checkbox: Locator=page.getByLabel('Sunday');

//         await  expect(checkbox).toBeVisible();

//         //  await checkbox.check();
//         //  await expect(checkbox).toBeChecked();
       
       
//          // map use korbo for array

//           const days:string[] =['sunday','Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

//        const checkboxes: Locator[]= days.map( index => page.getByLabel(index));

//          /*for(const checkbox of checkboxes){
//             await checkbox.check();
//            await  expect(checkbox).toBeChecked();
            
//          }*/

//         // ekhn ami chacchi last 3 tah ke select korte.taay slice use korbo

          
//         for(const checkbox of checkboxes.slice(-3)){

//            await checkbox.check();
//            await expect(checkbox).toBeChecked();

//         }
// //  ekhn ami  je ghola select oi ghula uncheck korbo abr uncheck ghula check korbo

       
// for(const checkbox of checkboxes){

// if( await checkbox.isChecked())// true
//   {  
//     await checkbox.uncheck();
//      expect(checkbox).not.toBeChecked();
// } 
// else
//   {
//   await checkbox.check();
//      expect(checkbox).toBeChecked();
// }

// }

// // Randomly selecting -- selecting[4,5,6]
//        const indexes:any[]=[1,5,6];
//        for(const i of indexes){
//         await checkboxes[i].check();
//         expect(checkboxes[i]).toBeChecked();
//        }


// // seleting  checkbox base on the level
 
//   const weekName:string='Friday';
//   for(const lavel of days){
//      if(lavel === weekName){

//       const checkbox:any= page.getByLabel(lavel);
//       checkbox.check();
//       await expect(checkbox).toBeChecked()
//      }
//   }
  

//          await page.waitForTimeout(5000);


            const textbox:Locator =page.locator('#name');
       
         await  expect(textbox).toBeVisible();
         await expect(textbox).toBeEnabled();

           const maxLength: any = await textbox.getAttribute('maxlength');
            expect(maxLength).toBe('15');

             const placeholder:any= await textbox.getAttribute("placeholder");
             expect(placeholder).toBe('Enter Name');


           await  textbox.fill('robiul');

           // email fields
            
           const textbox1:Locator=page.locator('#email');
      
           expect(textbox1).toBeVisible();

           const maxLength1: any=await textbox1.getAttribute("maxlength");
           expect(maxLength1).toBe('25');

            const placeholder1:any= await textbox1.getAttribute("placeholder");
             expect(placeholder1).toBe('Enter EMail');

             await textbox1.fill("rawal@gmail.com");


// radio button click 

    const radiomale:any   =page.locator('#male');
     radiomale.check();
      expect(radiomale).toBeChecked();

      await page.waitForTimeout(5000);

       const radiofemale:Locator    = page.locator("#female");
       radiofemale.check();
       expect(radiofemale).toBeChecked();

      
//checkbox selecting
 
                      // const checkbox:Locator=page.getByLabel("Sunday");
                      // await checkbox.check();
                      // expect(checkbox).toBeChecked();
                       

                      const days:string[]=['sunday','Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];

                       const checkboxes:Locator[]=days.map(index => page.getByLabel(index));
                      //  for(const checkbox of checkboxes)
                      //   {

                      //    await checkbox.check();
                      //    expect(checkbox).toBeChecked();
                         
                      //  }
                      //  await page.waitForTimeout(5000);

                        // last 3 tah must select korte hobe eta must than test korbo eibhabe
                        //slice use korbo

for(const checkbox1 of checkboxes.slice(-3))
  {
      await checkbox1.check();
      expect(checkbox1).toBeChecked()// true or false return or check kore
  }

  //select ghula uncheck and uncheck ke check korbo.

      for(const checkbox2 of checkboxes)
        {
          if( await checkbox2.isChecked())//true
            {
                 await checkbox2.uncheck();
                 expect(checkbox2).not.toBeChecked();
          }

          else{
              await checkbox2.check();
              await expect(checkbox2).toBeChecked();
          }
 
      }
       



await page.waitForTimeout(5000);





//Ramdomly kono kichu select koraa--select[4,5,6]

const indexes:any[]=[4,5,6];
 for(const i of indexes){

 await checkboxes[i].check();
await expect(checkboxes[i]).toBeChecked();

 }
await page.waitForTimeout(5000);

        
 });