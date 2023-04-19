import { Selector } from 'testcafe'

fixture`Getting Started`
.page`https://dev.sharparchive.com/`

test('Valid Signup test', async t=>{
    await t
    .setNativeDialogHandler(() => true)
    .click(Selector("span").withText("Sign Up"));
    
    await t.typeText("#first_name", "Md");
    await t.typeText("#last_name", "Maynuddin");
    await t.typeText("#email", "maynul.123@gmail.com");
    await t.typeText("#password", "Mynul123456@");
    await t.typeText("#business_name", "I Team");
    await t.click("#selectStyleId", "");
})

test(`Select an option from the drop-down menu`, async t => {
    await t
        .click(select)
        .click(selectStyleId.withText('Education'))
        
});