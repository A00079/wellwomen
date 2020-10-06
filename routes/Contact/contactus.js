const router = require('express').Router();
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

router.post('/create', function (req, res) {
    console.log('sending email..', req.body);

    const message = {
        from: 'officialcodes007@gmail.com', // Sender address
        to: req.body.email,         // recipients
        subject: 'Wellcome from Well Women.', // Subject line
        html: `
                <!DOCTYPE html>
            <html lang="en">
            <head>
            <title></title>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <style type="text/css">
            body {
                margin: 0;
                padding: 0;
                mso-line-height-rule: exactly;
                min-width: 100%;
            }
            
            .wrapper {
                display: table;
                table-layout: fixed;
                width: 100%;
                min-width: 620px;
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            
            body, .wrapper {
                background-color: #ffffff;
            }
            
            /* Basic */
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
            table.center {
                margin: 0 auto;
                width: 602px;
            }
            td {
                padding: 0;
                vertical-align: top;
            }
            
            .spacer,
            .border {
                font-size: 1px;
                line-height: 1px;
            }
            .spacer {
                width: 100%;
                line-height: 16px
            }
            .border {
                background-color: #e0e0e0;
                width: 1px;
            }
            
            .padded {
                padding: 0 24px;
            }
            img {
                border: 0;
                -ms-interpolation-mode: bicubic;
            }
            .image {
                font-size: 12px;
            }
            .image img {
                display: block;
            }
            strong, .strong {
                font-weight: 700;
            }
            h1,
            h2,
            h3,
            p,
            ol,
            ul,
            li {
                margin-top: 0;
            }
            ol,
            ul,
            li {
                padding-left: 0;
            }
            
            a {
                text-decoration: none;
                color: #616161;
            }
            .btn {
                background-color:#2196F3;
                border:1px solid #2196F3;
                border-radius:2px;
                color:#ffffff;
                display:inline-block;
                font-family:Roboto, Helvetica, sans-serif;
                font-size:14px;
                font-weight:400;
                line-height:36px;
                text-align:center;
                text-decoration:none;
                text-transform:uppercase;
                width:200px;
                height: 36px;
                padding: 0 8px;
                margin: 0;
                outline: 0;
                outline-offset: 0;
                -webkit-text-size-adjust:none;
                mso-hide:all;
            }
            
            /* Top panel */
            .title {
                text-align: left;
            }
            
            .subject {
                text-align: right;
            }
            
            .title, .subject {
                width: 300px;
                padding: 8px 0;
                color: #616161;
                font-family: Roboto, Helvetica, sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 14px;
            }
            
            /* Header */
            .logo {
                padding: 16px 0;
            }
            
            /* Logo */
            .logo-image {
            
            }
            
            /* Main */
            .main {
                -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
                -moz-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
            }
            
            /* Content */
            .columns {
                margin: 0 auto;
                width: 600px;
                background-color: #ffffff;
                font-size: 14px;
            }
            
            .column {
                text-align: left;
                background-color: #ffffff;
                font-size: 14px;
            }
            
            .column-top {
                font-size: 24px;
                line-height: 24px;
            }
            
            .content {
                width: 100%;
            }
            
            .column-bottom {
                font-size: 8px;
                line-height: 8px;
            }
            
            .content h1 {
                margin-top: 0;
                margin-bottom: 16px;
                color: #212121;
                font-family: Roboto, Helvetica, sans-serif;
                font-weight: 400;
                font-size: 20px;
                line-height: 28px;
            }
            
            .content p {
                margin-top: 0;
                margin-bottom: 16px;
                color: #212121;
                font-family: Roboto, Helvetica, sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
            }
            .content .caption {
                color: #616161;
                font-size: 12px;
                line-height: 20px;
            }
            
            /* Footer */
            .signature, .subscription {
                vertical-align: bottom;
                width: 300px;
                padding-top: 8px;
                margin-bottom: 16px;
            }
            
            .signature {
                text-align: left;
            }
            .subscription {
                text-align: right;
            }
            
            .signature p, .subscription p {
                margin-top: 0;
                margin-bottom: 8px;
                color: #616161;
                font-family: Roboto, Helvetica, sans-serif;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
            }
            
            @media only screen and (min-width: 0) {
                .wrapper {
                    text-rendering: optimizeLegibility;
                }
            }
            @media only screen and (max-width: 620px) {
                [class=wrapper] {
                    min-width: 302px !important;
                    width: 100% !important;
                }
                [class=wrapper] .block {
                    display: block !important;
                }
                [class=wrapper] .hide {
                    display: none !important;
                }
            
                [class=wrapper] .top-panel,
                [class=wrapper] .header,
                [class=wrapper] .main,
                [class=wrapper] .footer {
                    width: 302px !important;
                }
            
                [class=wrapper] .title,
                [class=wrapper] .subject,
                [class=wrapper] .signature,
                [class=wrapper] .subscription {
                    display: block;
                    float: left;
                    width: 300px !important;
                    text-align: center !important;
                }
                [class=wrapper] .signature {
                    padding-bottom: 0 !important;
                }
                [class=wrapper] .subscription {
                    padding-top: 0 !important;
                }
            }
            </style>
            </head>
            <body style="margin: 0; padding: 0;">
            
            <center class="wrapper">

    <div class="spacer">&nbsp;</div>

    <table class="main center" width="602" border="0" cellspacing="0" cellpadding="0">
        <tbody>
        <tr>
            <td class="column">
                <div class="column-top">&nbsp;</div>
                <table class="content" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                    <tr>
                        <td class="padded">
                          <h1>Contact details from ${req.body.name}</h1>
                          
                          <p>Content:</p>
                          <table style="width:100%">
                          <tr>
                            <td><strong>Name</strong></td>
                            <td>${req.body.name}</td>
                          </tr>
                          <tr>
                            <td><strong>Email<strong></td>
                            <td>${req.body.email}</td>
                          </tr>
                          <tr>
                            <td><strong>Message</strong></td>
                            <td>${req.body.message}</td>
                          </tr>
                        </table><br>
                          <p style="text-align:center;"><a href="https://www.curvicare.com/" class="btn">Goto Site</a></p>
                          <p style="text-align:center;">
                            <a href="https://www.curvicare.com/" class="strong">https://www.curvicare.com/</a>
                          </p>
                          <p class="caption">By Team @Pratham</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div class="column-bottom">&nbsp;</div>
            </td>
        </tr>
        </tbody>
    </table>
    <div class="spacer">&nbsp;</div>
</center>
            
            </body>
            </html>`
    };
    transport.sendMail(message, function (err, info) {
        if (err) {
            res.status(404).json(err)
            console.log('Email Error', err.Error)
        } else {
            console.log('mail has sent.');
            res.status(200).json({ 'msg': 'Thankyou for contacting us' })
            console.log(info);
        }
    });
});

module.exports = router;
