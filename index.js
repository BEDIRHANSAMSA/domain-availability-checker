import axios from "axios";
import "dotenv/config";
import whois from "@bedirhansamsa/whois";
import twilo from "twilio";

console.log("Checking... ", process.env.DOMAIN_URL);
setInterval(checkDomain, 1000 * 60 * 60);

async function checkDomain() {
  const domain = process.env.DOMAIN_URL;
  const twiloIsEnabled = process.env.TWILO_ENABLED || false;

  if (!domain) {
    console.log("No domain specified in .env");
    return;
  }

  var data;

  try {
    data = await whois(domain);
  } catch (err) {
    console.log(err);
    return;
  }

  if (!data) {
    console.log("No data found");
    return;
  }

  if (data.available) {
    sendMessage(`Hey <@${process.env.DISCORD_USER_ID}>, domain is available.`);

    if (twiloIsEnabled) {
      await twiloMakeCall();
    }

    return;
  } else {
    sendMessage(`Domain is not available`, data);
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

async function twiloMakeCall() {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const phoneNumber = process.env.TWILIO_PHONE_NUMBER;
  const toPhoneNumber = process.env.TWILIO_TO_PHONE_NUMBER;

  if (!accountSid || !authToken || !phoneNumber || !toPhoneNumber) {
    console.log("No twilio credentials specified in .env");
    return;
  }

  const client = twilo(accountSid, authToken);

  await client.calls.create({
    twiml: "<Response><Say>Hey, domain is available.!</Say></Response>",
    to: toPhoneNumber,
    from: phoneNumber,
  });
}
