const tempmailoapi = require('tempmailo-api');

async function Main() {
    var Email = tempmailoapi.genRandomEmail();
    console.log("Using Email : " + Email)
    var Emails = await tempmailoapi.getEmails(Email);
    console.log("Found " + Emails.length + " Email(s) on " + Email + "!");
    console.log("nuts");
    Emails.forEach(element => console.log("From : " + element['from'] + " | Subject : " + element['subject']));
}

Main();
