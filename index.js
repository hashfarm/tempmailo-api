var unirest = require("unirest");
const cheerio = require('cheerio');

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function getRes() {
    return new Promise(resolve => {
        var req = unirest("GET", "https://tempmailo.com/");
        req.end(function (res) {
            if (res.error) throw new Error(res.error);
            resolve(res);
        });
    });
}

function getReqVerif(html) {
    const $ = cheerio.load(html);
    return $('[name=__RequestVerificationToken]')[0]['attribs']['value'];
}

function getAntiForgeryCookie(cookies) {
    return cookies[1].split(";")[0] + ";";
}

async function getEmails(email) {
    const Res = await getRes();
    const VerifToken = getReqVerif(Res.body);
    const AntiForgeryCookie = getAntiForgeryCookie(Res.headers['set-cookie']);
    return new Promise(resolve => { 
        unirest.post('https://tempmailo.com/')
        .type('json')
        .headers({
            "RequestVerificationToken": VerifToken,
            "Accept": "application/json, text/plain, */*",
            "Origin": "https://tempmailo.com",
            "Content-Type": "application/json;charset=UTF-8",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Cookie": AntiForgeryCookie
        })
        .send({
            mail: email
        })
        .then((response) => {
            resolve(response['body']);
        })
    });
}

function genRandomEmail() {
    const EmailDomains = ["livinginsurance.eu", "ivyandmarj.com", "digital10network.com", "celinecityitalia.com"];
    const RandomName = randomString(Math.floor(Math.random() * (8 - 5) + 5), 'abcdefghijklmnopqrstuvwxyz');
    const Email = RandomName + "@" + EmailDomains[~~(EmailDomains.length * Math.random())];
    return Email;
}

exports.getEmails = getEmails;
exports.genRandomEmail = genRandomEmail;
