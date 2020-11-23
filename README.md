# tempmailo-api
 A node.js API for accessing tempmailo.com's services.

---
Installation 
---
```
npm install tempmailo-api
```
---
Usage 
---
```javascript
tempmailoapi.genRandomEmail();
```
Generates a random email that is supported by tempmailo.

```javascript
tempmailoapi.getEmails(Email);
```
Retrieves all the emails in an inbox.

Example Response
```
[{"id":"5fbb3234575afab2c31f946c","from":"\"Sender\" <sender@domain.com>","to":"email@domain.com","subject":"Subject","text":null,"html":"<b>Hello</b>","date":"2020-11-23T03:53:22.723Z"}]
```
---
Examples 
---
Examples are available [here](https://github.com/ProtoGrace/tempmailo-api/tree/main/examples).
