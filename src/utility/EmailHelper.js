const { text } = require('express')
const nodemailer=require('nodemailer')

const EmailSend=async (EmailTo,EmailText,EmailSuject)=>{
  let transport =  nodemailer.createTransport({
        host:"mail.teamrabbil.com",
        port:25,
        secure:false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false},

    })
    let mailOptions={
        from:"Mern Ecommerce Site <info@teamrabbil.com>",
        to:EmailTo,
        subject:EmailSuject,
        text:EmailText,
    }

return await transport.sendMail(mailOptions)

}

module.exports = EmailSend;