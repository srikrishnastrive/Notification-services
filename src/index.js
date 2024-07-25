const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const mailSender = require('./config/email-config');
const serverConfig = require('./config/server-config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    try {
        const response =  await mailSender.sendMail({
            from : serverConfig.EMAIL_ID,
            to :'msrikrishna2000@gmail.com',
            subject : 'is the service working',
            text: 'yes it is working'
        });
        console.log(response);
    } catch (error) {
        console.log(error);
        throw error;
    }
    
});
