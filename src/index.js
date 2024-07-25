const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const amqplib = require('amqplib');

async function connectQueue(){
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('noti-queue');
        channel.consume('noti-queue',(data)=>{
            console.log(`${Buffer.from(data.content)}`);
            channel.ack(data);
        });
    } catch (error) {
        console.log(error);
    }
}

const mailSender = require('./config/email-config');
const serverConfig = require('./config/server-config');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectQueue();
    console.log('queue is up');
    // try {
    //     const response =  await mailSender.sendMail({
    //         from : serverConfig.EMAIL_ID,
    //         to :'msrikrishna2000@gmail.com',
    //         subject : 'is the service working',
    //         text: 'yes it is working'
    //     });
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    //     throw error;
    // }
    
});
