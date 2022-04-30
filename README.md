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
  -e "DOMAIN_URL=bca.com.tr"
  -e "DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/945786883844214784/ekgEQsg4QbYd0H2v7HZ0WpfBXR06AMkFh7kJYQECXNYTl4e5ka7fGl8Lu5S0ecMwlH0d"
  -e "DISCORD_USER_ID=294102481359863811"
  -e "TWILO_ENABLED=true"
  -e "TWILIO_ACCOUNT_SID=AC09a834e5b4019f8a2c8cb39151795717"
  -e "TWILIO_AUTH_TOKEN=055902f68d4eddb738a388931237cc54"
  -e "TWILIO_PHONE_NUMBER=+19896012128"
  -e "TWILIO_TO_PHONE_NUMBER=+905378384743"
  bedirhansamsa/domain-availability-checker
```

## Authors

- [@BEDIRHANSAMSA](https://www.github.com/BEDIRHANSAMSA)

## Feedback

If you have any feedback, please reach out to us at me@bedirhan.dev

## License

[MIT](https://choosealicense.com/licenses/mit/)
