const nodemailer = require('nodemailer');
const {EMAIL_ID,APP_PASSWORD} = require('./server-config');

const mailSender = nodemailer.createTransport({
    service:'Gmail',
    auth : {
        user : "airlinenotification25@gmail.com",
        pass : "eupqektmtnkvoujq"
    }
});


module.exports = mailSender;