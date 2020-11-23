const tempmailoapi = require('tempmailo-api');

async function Main() {
    var Email = tempmailoapi.genRandomEmail();
    console.log("Using Email : " + Email)
    var Emails = await tempmailoapi.GetEmails(Email);
    console.log("Found " + Emails.length + " Email(s) on " + Email + "!");
    Emails.forEach(element => console.log("From : " + element['from'] + " | Subject : " + element['subject']));
}

Main();