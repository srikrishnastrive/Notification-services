const { Mailer } = require('../config');
const {TicketRepository} = require('../repositories');


const ticketRepository = new TicketRepository();

async function sendEmail(mailFrom,mailTo,subject,text){
    try {
        const response = await Mailer.sendMail({
            from :mailFrom,
            to: mailTo,
            subject : subject,
            text : text
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function createTicket(data){
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getPendingTickets(){
    try {
      const response = await ticketRepository.getPendingTickets();
      return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    sendEmail,
    createTicket,
    getPendingTickets
}