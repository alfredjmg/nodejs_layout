const nodemailer = require('nodemailer');
var handlebars = require('handlebars');
const fs = require('fs');

let sendEmail = async (data, to, subject, view) => {

    var transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
           user: process.env.SMTP_EMAIL,
           pass: process.env.SMTP_PASSWORD
        }
    });

    var path = process.cwd() + '/views/' + view + '.html';

    return new Promise((resolve, reject) => {
        fs.readFile(path, {encoding: 'utf-8'}, function (err, html){
            
            if(!err){
                // variables for html with handlebars
                var template = handlebars.compile(html);
                var htmlToSend = template(data);

                const message = {
                    from: process.env.SMTP_EMAIL, // Sender address
                    to: to,         // List of recipients
                    subject: subject, // Subject line
                    html: htmlToSend
                };

                transport.sendMail(message, function(err, info) {
                    if (err) {
                    console.log(err)
                    reject(err);
                    } else {
                    console.log(info);
                    resolve(info);
                    }
                });
            }else{
                console.log(err);
            }

        });
    });

}

module.exports = {
    sendEmail
}