# tempmailo-api
 A node.js API for accessing and generating temporary email boxes using tempmailo.com's services.

---
Installation 
---
```
npm install tempmailo-api
```
---
Usage 
---
Import the module
```javascript
const tempmailoapi = require('tempmailo-api');
```

Generate a random email that is supported by tempmailo
```javascript
tempmailoapi.genRandomEmail();
```

Retrieve all the emails in an inbox
```javascript
tempmailoapi.getEmails(Email);
```
Example Response
```
[{"id":"5fbb3234575afab2c31f946c","from":"\"Sender\" <sender@domain.com>","to":"email@domain.com","subject":"Subject","text":null,"html":"<b>Hello</b>","date":"2020-11-23T03:53:22.723Z"}]
```
---
Examples 
---
Examples are available [here](https://github.com/ProtoGrace/tempmailo-api/tree/main/examples).

---
Domains
---
Some of the email domains I know tempmailo use, and are used by the random email gen.
```
@livinginsurance.eu
@ivyandmarj.com
@digital10network.com
@celinecityitalia.com
```
