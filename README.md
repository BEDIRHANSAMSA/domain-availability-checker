# Domain Availability Checker

Check the domain availability by sending a message to yourself via discord.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DURATION`: The duration of the message in milliseconds.

`DOMAIN_URL`

`DISCORD_WEBHOOK_URL`

`DISCORD_USER_ID`

`TWILO_ENABLED`

`TWILIO_ACCOUNT_SID`

`TWILIO_AUTH_TOKEN`

`TWILIO_PHONE_NUMBER`

`TWILIO_TO_PHONE_NUMBER`

## Installation

```bash
  git clone https://github.com/BEDIRHANSAMSA/domain-availability-check.git
  npm i
  npm run dev
```

## Docker Installation

### Without Twilo

```bash
  docker run
  -e "DURATION=3600000"
  -e "DOMAIN_URL=yourdomain.com"
  -e   "DISCORD_WEBHOOK_URL=yourwebook.com"
  -e "DISCORD_USER_ID=YOUR_ID"
  bedirhansamsa/domain-availability-checker
```

### With Twilo

```bash
  docker run
  -e "DURATION=3600000"
  -e "DOMAIN_URL=test.com"
  -e "DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/"
  -e "DISCORD_USER_ID=TEST"
  -e "TWILO_ENABLED=true"
  -e "TWILIO_ACCOUNT_SID=TEST"
  -e "TWILIO_AUTH_TOKEN=TST"
  -e "TWILIO_PHONE_NUMBER=TEST"
  -e "TWILIO_TO_PHONE_NUMBER=TEST"
  bedirhansamsa/domain-availability-checker
```

## Authors

- [@BEDIRHANSAMSA](https://www.github.com/BEDIRHANSAMSA)

## Feedback

If you have any feedback, please reach out to us at me@bedirhan.dev

## License

[MIT](https://choosealicense.com/licenses/mit/)
