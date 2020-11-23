const tempmailoapi = require('tempmailo-api');

async function Main() {
    var Emails = await tempmailoapi.getEmails("test@livinginsurance.eu");
    console.log("Found " + Emails.length + " Email(s) on test@livinginsurance.eu!");
    Emails.forEach(element => console.log("From : " + element['from'] + " | Subject : " + element['subject']));
}

Main();