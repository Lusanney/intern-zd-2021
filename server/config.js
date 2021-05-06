const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

module.exports = {
  ZENDESK_URL: process.env.ZENDESK_URL,
  ZENDESK_EMAIL: process.env.ZENDESK_EMAIL,
  ZENDESK_PASSWORD: process.env.ZENDESK_PASSWORD,
};
