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
})