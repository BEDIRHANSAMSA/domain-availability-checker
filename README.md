# Domain Availability Checker

Check the domain availability by sending a message to yourself via discord.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DOMAIN_URL`

`DISCORD_WEBHOOK_URL`

`DISCORD_USER_ID`

## Installation

```bash
  git clone https://github.com/BEDIRHANSAMSA/domain-availability-check.git
  npm i
  npm run dev
```

## Docker Installation

```bash
  docker run -e "DOMAIN_URL=yourdomain.com" -e "DISCORD_WEBHOOK_URL=yourwebook.com" -e "DISCORD_USER_ID=YOUR_ID" bedirhansamsa/domain-availability-checker
```

## Authors

- [@BEDIRHANSAMSA](https://www.github.com/BEDIRHANSAMSA)

## Feedback

If you have any feedback, please reach out to us at me@bedirhan.dev

## License

[MIT](https://choosealicense.com/licenses/mit/)
