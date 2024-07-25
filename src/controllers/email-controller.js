const {EmailService} = require('../services');


async function createTicket(req,res){
    try {
        const response = await EmailService.createTicket({
            subject : req.body.subject,
            content : req.body.content,
            recepientEmail : req.body.recepientEmail
        });

        return res.status(200).json(response);
        
    } catch (error) {
        return res.status(200).json(error);
    }
}

module.exports = {
    createTicket
}