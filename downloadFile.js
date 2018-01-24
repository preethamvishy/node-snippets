var request = require('request'),
    fs = require('fs');

//enter following values 
var url = '';
var destination = '';
var filename = '';

request(url)
.on('error', function(err) {
    console.log(err)
  })
.pipe(fs.createWriteStream(destination + filename))
.on('error', function(err) {
    console.log(err)
  })
.on('close', function(){
    console.log('Saved');
});
