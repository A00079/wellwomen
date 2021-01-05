const router = require('express').Router();
const http = require('http');
const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'mail.curvicare.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

router.post('/', function (req, res) {
    console.log('sending email..', req.body);
    const message = {
        from: process.env.MAIL_USER, // Sender address
        to: process.env.MAIL_USER,         // recipients
        subject: 'User Contact Details', // Subject line
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
            res.status(501).json(err)
            console.log('Email Error', err.Error)
        } else {
            console.log('mail has sent.');
            res.status(200).json({ 'msg': 'Thankyou for contacting us' });
            const messagetoclient = {
                from: process.env.MAIL_USER, // Sender address
                to: req.body.email,         // recipients
                subject: 'Thankyou For Contacting Us', // Subject line
                html: `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                <html xmlns="http://www.w3.org/1999/xhtml">
                <head>
                  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                  <title>Oxygen Invoice</title>
                
                  <style type="text/css">
                    /* Take care of image borders and formatting, client hacks */
                    img { max-width: 600px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
                    a img { border: none; }
                    table { border-collapse: collapse !important;}
                    #outlook a { padding:0; }
                    .ReadMsgBody { width: 100%; }
                    .ExternalClass { width: 100%; }
                    .backgroundTable { margin: 0 auto; padding: 0; width: 100% !important; }
                    table td { border-collapse: collapse; }
                    .ExternalClass * { line-height: 115%; }
                    .container-for-gmail-android { min-width: 600px; }
                
                
                    /* General styling */
                    * {
                      font-family: Helvetica, Arial, sans-serif;
                    }
                
                    body {
                      -webkit-font-smoothing: antialiased;
                      -webkit-text-size-adjust: none;
                      width: 100% !important;
                      margin: 0 !important;
                      height: 100%;
                      color: #676767;
                    }
                
                    td {
                      font-family: Helvetica, Arial, sans-serif;
                      font-size: 14px;
                      color: #777777;
                      text-align: center;
                      line-height: 21px;
                    }
                
                    a {
                      color: #676767;
                      text-decoration: none !important;
                    }
                
                    .pull-left {
                      text-align: left;
                    }
                
                    .pull-right {
                      text-align: right;
                    }
                
                    .header-lg,
                    .header-md,
                    .header-sm {
                      font-size: 32px;
                      font-weight: 700;
                      line-height: normal;
                      padding: 35px 0 0;
                      color: #4d4d4d;
                    }
                
                    .header-md {
                      font-size: 24px;
                    }
                
                    .header-sm {
                      padding: 5px 0;
                      font-size: 18px;
                      line-height: 1.3;
                    }
                
                    .content-padding {
                      padding: 20px 0 5px;
                    }
                
                    .mobile-header-padding-right {
                      width: 290px;
                      text-align: right;
                      padding-left: 10px;
                    }
                
                    .mobile-header-padding-left {
                      width: 290px;
                      text-align: left;
                      padding-left: 10px;
                    }
                
                    .free-text {
                      width: 100% !important;
                      padding: 10px 60px 0px;
                    }
                
                    .button {
                      padding: 30px 0;
                    }
                
                    .mini-block {
                      border: 1px solid #e5e5e5;
                      border-radius: 5px;
                      background-color: #ffffff;
                      padding: 12px 15px 15px;
                      text-align: left;
                      width: 253px;
                    }
                
                    .mini-container-left {
                      width: 278px;
                      padding: 10px 0 10px 15px;
                    }
                
                    .mini-container-right {
                      width: 278px;
                      padding: 10px 14px 10px 15px;
                    }
                
                    .product {
                      text-align: left;
                      vertical-align: top;
                      width: 175px;
                    }
                
                    .total-space {
                      padding-bottom: 8px;
                      display: inline-block;
                    }
                
                    .item-table {
                      padding: 50px 20px;
                      width: 560px;
                    }
                
                    .item {
                      width: 300px;
                    }
                
                    .mobile-hide-img {
                      text-align: left;
                      width: 125px;
                    }
                
                    .mobile-hide-img img {
                      border: 1px solid #e6e6e6;
                      border-radius: 4px;
                    }
                
                    .title-dark {
                      text-align: left;
                      border-bottom: 1px solid #cccccc;
                      color: #4d4d4d;
                      font-weight: 700;
                      padding-bottom: 5px;
                    }
                
                    .item-col {
                      padding-top: 20px;
                      text-align: left;
                      vertical-align: top;
                    }
                
                    .force-width-gmail {
                      min-width:600px;
                      height: 0px !important;
                      line-height: 1px !important;
                      font-size: 1px !important;
                    }
                
                  </style>
                
                  <style type="text/css" media="screen">
                    @import url(http://fonts.googleapis.com/css?family=Oxygen:400,700);
                  </style>
                
                  <style type="text/css" media="screen">
                    @media screen {
                      /* Thanks Outlook 2013! */
                      * {
                        font-family: 'Oxygen', 'Helvetica Neue', 'Arial', 'sans-serif' !important;
                      }
                    }
                  </style>
                
                  <style type="text/css" media="only screen and (max-width: 480px)">
                    /* Mobile styles */
                    @media only screen and (max-width: 480px) {
                
                      table[class*="container-for-gmail-android"] {
                        min-width: 290px !important;
                        width: 100% !important;
                      }
                
                      img[class="force-width-gmail"] {
                        display: none !important;
                        width: 0 !important;
                        height: 0 !important;
                      }
                
                      table[class="w320"] {
                        width: 320px !important;
                      }
                
                      td[class*="mobile-header-padding-left"] {
                        width: 160px !important;
                        padding-left: 0 !important;
                      }
                
                      td[class*="mobile-header-padding-right"] {
                        width: 160px !important;
                        padding-right: 0 !important;
                      }
                
                      td[class="header-lg"] {
                        font-size: 24px !important;
                        padding-bottom: 5px !important;
                      }
                
                      td[class="content-padding"] {
                        padding: 5px 0 5px !important;
                      }
                
                       td[class="button"] {
                        padding: 5px 5px 30px !important;
                      }
                
                      td[class*="free-text"] {
                        padding: 10px 18px 30px !important;
                      }
                
                      td[class~="mobile-hide-img"] {
                        display: none !important;
                        height: 0 !important;
                        width: 0 !important;
                        line-height: 0 !important;
                      }
                
                      td[class~="item"] {
                        width: 140px !important;
                        vertical-align: top !important;
                      }
                
                      td[class~="quantity"] {
                        width: 50px !important;
                      }
                
                      td[class~="price"] {
                        width: 90px !important;
                      }
                
                      td[class="item-table"] {
                        padding: 30px 20px !important;
                      }
                
                      td[class="mini-container-left"],
                      td[class="mini-container-right"] {
                        padding: 0 15px 15px !important;
                        display: block !important;
                        width: 290px !important;
                      }
                
                    }
                  </style>
                </head>
                
                <body bgcolor="#f7f7f7">
                <table align="center" cellpadding="0" cellspacing="0" class="container-for-gmail-android" width="100%">
                  <tr>
                    <td align="left" valign="top" width="100%" style="background:repeat-x url(http://s3.amazonaws.com/swu-filepicker/4E687TRe69Ld95IDWyEg_bg_top_02.jpg) #ffffff;">
                      <center>
                      <img src="http://s3.amazonaws.com/swu-filepicker/SBb2fQPrQ5ezxmqUTgCr_transparent.png" class="force-width-gmail">
                        <table cellspacing="0" cellpadding="0" width="100%" bgcolor="#ffffff" background="http://s3.amazonaws.com/swu-filepicker/4E687TRe69Ld95IDWyEg_bg_top_02.jpg" style="background-color:transparent">
                          <tr>
                            <td width="100%" height="80" valign="top" style="text-align: center; vertical-align:middle;">
                            <!--[if gte mso 9]>
                            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="mso-width-percent:1000;height:80px; v-text-anchor:middle;">
                              <v:fill type="tile" src="http://s3.amazonaws.com/swu-filepicker/4E687TRe69Ld95IDWyEg_bg_top_02.jpg" color="#ffffff" />
                              <v:textbox inset="0,0,0,0">
                            <![endif]-->
                              <center>
                                <table cellpadding="0" cellspacing="0" width="600" class="w320">
                                  <tr>
                                    <td class="pull-left mobile-header-padding-left" style="vertical-align: middle;">
                                      <a href=""><img width="137" height="47" src="http://s3.amazonaws.com/swu-filepicker/0zxBZVuORSxdc9ZCqotL_logo_03.gif" alt="logo"></a>
                                    </td>
                                    <td class="pull-right mobile-header-padding-right" style="color: #4d4d4d;">
                                      <a href=""><img width="44" height="47" src="http://s3.amazonaws.com/swu-filepicker/k8D8A7SLRuetZspHxsJk_social_08.gif" alt="twitter" /></a>
                                      <a href=""><img width="38" height="47" src="http://s3.amazonaws.com/swu-filepicker/LMPMj7JSRoCWypAvzaN3_social_09.gif" alt="facebook" /></a>
                                      <a href=""><img width="40" height="47" src="http://s3.amazonaws.com/swu-filepicker/hR33ye5FQXuDDarXCGIW_social_10.gif" alt="rss" /></a>
                                    </td>
                                  </tr>
                                </table>
                              </center>
                              <!--[if gte mso 9]>
                              </v:textbox>
                            </v:rect>
                            <![endif]-->
                            </td>
                          </tr>
                        </table>
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top" width="100%" style="background-color: #f7f7f7;" class="content-padding">
                      <center>
                        <table cellspacing="0" cellpadding="0" width="600" class="w320">
                          <tr>
                            <td class="header-lg">
                              Thank you for contacting us!
                            </td>
                          </tr>
                        </table>
                      </center>
                    </td>
                  </tr>
                </table>
                </div>
                </body>
                </html>`
            };
            transport.sendMail(messagetoclient, function (err, info) {
                if (err) {
                    res.status(504).json(err)
                    console.log('Email Error', err.Error)
                } else {
                    res.status(200);
                }
            });
            console.log(info);
        }
    });
});

module.exports = router;
