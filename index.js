import axios from "axios";
import whois from "whois-json";
import "dotenv/config";

console.log("Checking... ", process.env.DOMAIN_URL);
setInterval(checkDomain, 1000 * 60 * 60);

async function checkDomain() {
  const domain = process.env.DOMAIN_URL;

  if (!domain) {
    console.log("No domain specified in .env");
    return;
  }

  var data = await whois(domain);
  if (!data) {
    console.log("No data found");
    return;
  }

  if (!data.domainName) {
    sendMessage(`Hey <@${process.env.DISCORD_USER_ID}>, domain is available.`);
    return;
  } else {
    sendMessage(`Domain is not available`);
  }
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
