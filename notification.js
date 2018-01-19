// This has been tested on a Mac
var notifier = require('node-notifier');

// notifier.notify('Notification 1');

// notifier.notify({
//   title: 'Notification 2',
//   message: 'Notification with message'
// });

notifier.notify({
  'title': 'Notification.js',
  'subtitle': 'This is important',
  'message': 'Perform an action to show on console',
  'sound': 'Submarine', // has to be changed for Windows
  'icon': 'https://picsum.photos/200/200/?image=1',
  'contentImage': 'https://picsum.photos/200/300/?image=1',
  'open': void 0,
  'wait': false,
  // timeout: 5,
  closeLabel: 'Close',
  // actions: ['Action 1', 'Action 2', 'Action 3'],
  reply: true,
  
}, function (error, response, metadata) {
  console.log(metadata.activationValue);
});
