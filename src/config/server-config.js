const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: 3002,
    EMAIL_ID : process.env.EMAIL_ID,
    APP_PASSWORD : process.env.APP_PASSWORD
}