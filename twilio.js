// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACbbb75886bf55eccbe06ce1d1f44e06e0';
const authToken = 'b3425b6482686362f68eb94c9ae3909b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello Amy, how was your experience flushing the toilet just now?',
     from: '+12059227195',
     to: '+19083408880'
   })
  .then(message => console.log(message.sid));
