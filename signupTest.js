import { Selector } from 'testcafe'

fixture`Getting Started`
.page`https://dev.sharparchive.com/`

test('Valid Signup test', async t=>{
    await t
    .setNativeDialogHandler(() => true)
    .click(Selector("span").withText("Sign Up"));
    await t.debug();
    

})