var dialog = require('dialog');

//Pull request pending for custom dialog. If PR is not merged at the time you see this, clone https://github.com/preethamvishy/dialog and use to create custom dialog
dialog.custom('Pay attention', 'Title', '{"No","Maybe","Yes"}'
, 'note', function(exitcode, out, err) {
    console.log(exitcode)
    if (exitcode == 0)
        console.log(out)
}, ' ') 
 


dialog.info('Pay attention.', 'My dialog', function(exitCode) {
    if (exitCode == 0) console.log('OK Clicked');
})

dialog.show(0, 'Pay attention.', 'My dialog', function(exitCode) {
    if (exitCode == 0) console.log('OK CLicked');
})
