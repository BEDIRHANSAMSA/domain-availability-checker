const { default: axios } = require("axios");
var whois = require("whois");
require("dotenv").config();

setInterval(checkDomain, 1000 * 60 * 60); // every hour

function checkDomain() {
  var domain = process.env.DOMAIN_URL;

  if (!domain) {
    console.log("No domain specified in .env");
    return;
  }

  whois.lookup(domain, function (err, data) {
    if (err) {
    } else {
      if (data.indexOf("No match for") > -1) {
        sendMessage("Domain is available");
      } else {
        sendMessage("Domain is not available");
      }
    }
  });
}

function sendMessage(message) {
  if (!process.env.DISCORD_WEBHOOK_URL) {
    console.log("No discord webhook url specified in .env");
    return;
  }

  axios.post(process.env.DISCORD_WEBHOOK_URL, {
    content: message,
  });
}
