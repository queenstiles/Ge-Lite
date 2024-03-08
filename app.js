const express = require('express');
var bodyParser  = require('body-parser');
const app = express();
const port = 7000
const nodemailer = require("nodemailer");
const path = require('path');



app.use(
    express.urlencoded({
      extended: true,
    })
  )

  app.use(express.json());



const ff = path.join(__dirname, '/src')
app.use( express.static(ff));


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/src')
});


      //LOGIN OTP SECTION

app.post('/login/index.html', (request, response)=>{
    let info = request.body
   
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 587,
            service: 'gmail',
            auth:{
                user:"gelitfinance@gmail.com",
                pass:"boxq pcgp wcjd iyfx"
            },
            from:"gelitfinance@gmail.com",
        });

        const mail_option = {
            from:`Ge-Lite <noreply@gelitfinance@gmail.com>`,
            to: info.email,
            subject: "Ge-Lite Confirmation Code",
            html:  `
            <body >
            <div >
             <div style=" font-family: 'Courier New', Courier, monospace;  text-align: center;">
               <h3 style="background-color: rgb(89, 76, 0); margin: 4%; padding: 3%; color: white;">CONFIRMATION CODE</h3>
               <p style="margin: 3%;">Please use the verification code below to verify your login access:</p>
            
               <h2><strong>${info.OTP}</strong></h2>
            
               <p style="margin: 3%;">If you didn't request this, you can ignore this email or let us know. <br>
                Thanks!</p>
             </div>
            </div>
            </body>

            `
        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })

    response.json({
     message: 'success'
    })
    
})
})


    //    INTERNATIONAL TRNSFER EMAIL


    app.post('/dashboard/wire.html', (request, response)=>{
        let info = request.body
       
        return new Promise((resolve, reject)=>{
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                secureConnection: true,
                port: 587,
                service: 'gmail',
                auth:{
                    user:"gelitfinance@gmail.com",
                    pass:"boxq pcgp wcjd iyfx"
                },
                from:"gelitfinance@gmail.com",
            });
    
            const mail_option = {
                from:`Ge-Lite <noreply@gelitfinance@gmail.com>`,
                to: info.senderemail,
                subject: "New Alert From Ge-Lite",
                html:  `
                <body >
                <div style=" width: 100%;">
                <div class="inm" style="  border-top-right-radius: 50px; border-top-left-radius: 50px;  background-color: rgba(4, 67, 29, 0.463);  display: flex;" >
               <div style=" width: 100%;"> 
             <h1 style="color: rgb(3, 33, 8); font-size: 50px; text-align: center; width: 100%;">Ge-Lite</h1>
               </div>
            </div>
            
            
               <div style="margin: 0px;  ">
                <h1 style=" margin: 0px; padding-top: 5%; margin-left: 2%;">Transaction Notification</h1>
                <hr>
               <div style="padding: 3%;  border-left: 1px solid rgba(0, 0, 0, 0.272); border-right: 1px solid rgba(0, 0, 0, 0.288);">
                <h4>Dear  ${info.sendername},</h4>
                <p>
                Your transfer of ${info.debit}.00 to ${info.receivercountry}  was successful and might take upto 5 working days to reflect on
                receiver's balance.
                </p>
                <h4>Transaction Details</h4>
                <p>Bank:</p>
                <h5>${info.receiverbank}</h5>
            
                <p>Account Number:</p>
                <h5>${info.receiveraccountnumber}</h5>
            
                <p>Account Holder:</p>
                <h5>${info.receivername}</h5>
            
                <p>Amount:</p>
                <h5>${info.debit}.00</h5>
    
                <p>Date:</p>
                <h5>${info.date}</h5>
            
                <h5>
                    For further enquiries, please contact our customer support through: <br>
                    tel: <a href="#">+1 (804) 791‑8456</a>
                </h5>
            
                <h4>Thanks for choosing Ge-Lite</h4>
               </div>
               </div>
               <div style="background-color: rgba(4, 67, 29, 0.463); text-align: center; padding: 1%; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;">
                <h6>Copyright © 2024  Ge-Lite All Rights Reserved.</h6>
                </div>
            </div>
                </body>
    
                `
            }
    
            transporter.sendMail(mail_option, function(error, info){
                if(error){
                    return reject({message:`An error has occured`})
                }
                return resolve({message:"email sentss"})
            })
    
        response.json({
         message: 'success'
        })
        
    })
    })


app.post('/dashboard/localtransfer.html', (request, response)=>{
    let info = request.body
   
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 587,
            service: 'gmail',
            auth:{
                user:"gelitfinance@gmail.com",
                pass:"boxq pcgp wcjd iyfx"
            },
            from:"gelitfinance@gmail.com",
        });


        const mail_option = {
            from:`Ge-Lite <noreply@gelitfinance@gmail.com>`,
            to: info.senderemail,
            subject: "New Alert From Ge-Lite",
            html:  `
            <body >
            <div style=" width: 100%;">
            <div class="inm" style="  border-top-right-radius: 50px; border-top-left-radius: 50px;  background-color: rgba(4, 67, 29, 0.463);  display: flex;" >
           <div style=" width: 100%;"> 
         <h1 style="color: rgb(3, 33, 8); font-size: 50px; text-align: center; width: 100%;">Ge-Lite</h1>
           </div>
        </div>
        
        
           <div style="margin: 0px;  ">
            <h1 style=" margin: 0px; padding-top: 5%; margin-left: 2%;">Transaction Notification</h1>
            <hr>
           <div style="padding: 3%;  border-left: 1px solid rgba(0, 0, 0, 0.272); border-right: 1px solid rgba(0, 0, 0, 0.288);">
            <h4>Dear  ${info.sendername},</h4>
            <p>
            Your transfer of ${info.currency}${info.debit}.00 was successful.
            </p>
            <h4>Transaction Details</h4>
            <p>Bank:</p>
            <h5>Ge-Lite</h5>
        
            <p>Account Number:</p>
            <h5>${info.receiveraccountnumber}</h5>
        
            <p>Account Holder:</p>
            <h5>${info.receivername}</h5>
        
            <p>Amount:</p>
            <h5>${info.currency}${info.debit}.00</h5>

            <p>Fee:</p>
            <h5>${info.currency}0.00</h5>
        
            <p>Date:</p>
            <h5>${info.date}</h5>
        
            <h5>
                For further enquiries, please contact our customer support through: <br>
                tel: <a href="#">+1 (804) 791‑8456</a>
            </h5>
        
            <h4>Thanks for choosing Ge-Lite</h4>
           </div>
           </div>
           <div style="background-color: rgba(4, 67, 29, 0.463); text-align: center; padding: 1%; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;">
            <h6>Copyright © 2024  Ge-Lite All Rights Reserved.</h6>
            </div>
        </div>
            </body>

            `
        }

        const mail_option2 = {
            from:`Ge-Lite <noreply@gelitfinance@gmail.com>`,
            to: info.receiveremail,
            subject: "New Alert From Ge-Lite",
            html:  `
            <body >
            <div style=" width: 100%;">
            <div class="inm" style="  border-top-right-radius: 50px; border-top-left-radius: 50px;  background-color: rgba(4, 67, 29, 0.463);  display: flex;" >
           <div style=" width: 100%;"> 
         <h1 style="color: rgb(3, 33, 8); font-size: 50px; text-align: center; width: 100%;">Ge-Lite</h1>
           </div>
        </div>
        
        
           <div style="margin: 0px;  ">
            <h1 style=" margin: 0px; padding-top: 5%; margin-left: 2%;">Transaction Notification</h1>
            <hr>
           <div style="padding: 3%;  border-left: 1px solid rgba(0, 0, 0, 0.272); border-right: 1px solid rgba(0, 0, 0, 0.288);">
            <h4>Dear  ${info.receivername},</h4>
            <p>
            Your Ge-Lite account has been credited with ${info.currency}${info.debit}.00 from ${info.sendername}.
            </p>
        
            <p>Date:</p>
            <h5>${info.date}</h5>
        
            <h5>
                For further enquiries, please contact our customer support through: <br>
                tel: <a href="#">+1 (804) 791‑8456</a>
            </h5>
        
            <h4>Thanks for choosing Ge-Lite</h4>
           </div>
           </div>
           <div style="background-color: rgba(4, 67, 29, 0.463); text-align: center; padding: 1%; border-bottom-left-radius: 50px; border-bottom-right-radius: 50px;">
            <h6>Copyright © 2024  Ge-Lite All Rights Reserved.</h6>
            </div>
        </div>
            </body>
            
            `
        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })

        transporter.sendMail(mail_option2, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })




    response.json({
     message: 'success'
    })
    
})
})



//REGISTRATION WELCOME MESSAGE

app.post('/register/index.html', (request, response)=>{
   

    let info = request.body
    console.log(info.email);
   
    return new Promise((resolve, reject)=>{
        var transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            secureConnection: true,
            port: 587,
            service: 'gmail',
            auth:{
                user:"gelitfinance@gmail.com",
                pass:"boxq pcgp wcjd iyfx"
            },
            from:"gelitfinance@gmail.com",
        });

        const mail_option = {
            from:`Ge-Lite <noreply@gelitfinance@gmail.com>`,
            to: info.email,
            subject: "Welcome Message From Ge-Lite",
            html:`
            
            <div dir="ltr" class="es-wrapper-color">
      
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="esd-header-popover es-header" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                             
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" bgcolor="#ffffff" style="background-color: #ffffff;">
                                            <table class="es-content-body" style="background-color: #ffffff;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p20r es-p20l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r es-m-p20b esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href=""><img class="adapt-img" src="https://ffnofoe.stripocdn.email/content/guids/CABINET_0d71d49034ae71e9fc9c6ea70677feb4/images/group_89_Ouc.png" alt style="display: block;" width="515"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p30t">
                                                                                            <h1 style="margin-top: 10%;">Turn your ideas into reality with us</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p20t es-p20b">
                                                                                            <p>&nbsp;Welcome ${info.name}! We are very excited and happy to get the opportunity to serve you as one of our respectable customers. We really thank you for choosing us. We can assure you that our all workers are very responsible and committed towards our customers. We also are confident about our good quality service.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr >
                                                                                        <td  align="center" class="esd-block-button">
                                                                                      
                                                                                           <span  "><a  href="#" class="es-button" target="_blank">GO TO DASHBOARD</a></span>
                                                                                           
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-footer" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center" esd-custom-block-id="648189">
                                            <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p40t es-p40b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p5t es-p5b">
                                                                                            <h2 style="margin-top: 10%;">Questions?</h2>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10t es-p20b">
                                                                                            <p><a href="" target="_blank"></a>I am here to help you with your problems and queries related to our service and working procedure.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-button es-p40b"><span class="es-button-border"><a href="tel:" class="es-button" target="_blank">+ (000) 123 456 789</a></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image es-p10t es-p20b" style="font-size: 0px;"><a target="_blank" href=""><img style="margin-top: 10%; border-radius: 10px; padding: 1%;" src="https://firebasestorage.googleapis.com/v0/b/ge-lite.appspot.com/o/IMG_8817.PNG?alt=media&token=c107afad-2532-43cc-b720-12e0101be84a" style="display: block;" height="40" ></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-social es-p20b" style="font-size:0">
                                                                                            <table style="margin-top: 10%; " cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                <tbody >
                                                                                                    <tr>
                                                                                                        <td  valign="top" style="margin-right: 5%;" class="es-p25r"><a target="_blank" href=""><img title="Facebook" src="https://ffnofoe.stripocdn.email/content/assets/img/social-icons/rounded-black/facebook-rounded-black.png" alt="Fb" height="24"></a></td>
                                                                                                        <td  valign="top" class="es-p25r"><a target="_blank" href=""><img title="Twitter" src="https://ffnofoe.stripocdn.email/content/assets/img/social-icons/rounded-black/twitter-rounded-black.png" alt="Tw" height="24"></a></td>
                                                                                                        <td  valign="top" class="es-p25r"><a target="_blank" href=""><img title="Instagram" src="https://ffnofoe.stripocdn.email/content/assets/img/social-icons/rounded-black/instagram-rounded-black.png" alt="Inst" height="24"></a></td>
                                                                                                        <td  valign="top"><a target="_blank" href=""><img title="Youtube" src="https://ffnofoe.stripocdn.email/content/assets/img/social-icons/rounded-black/youtube-rounded-black.png" alt="Yt" height="24"></a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td class="esd-block-menu" esd-tmp-menu-color="#ffffff" esd-tmp-divider="0|solid|#efefef" esd-tmp-menu-font-size="12px">
                                                                                            <table style="margin-top: 10%;" cellpadding="0" cellspacing="0" width="100%" class="es-menu">
                                                                                                <tbody>
                                                                                                    <tr >
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l"><a target="_blank" href="">Location</a></td>
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l"><a target="_blank" href="">Contact</a></td>
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l"><a target="_blank" href="">Help</a></td>
                                                                                                        <td align="center" valign="top" width="25%" class="es-p10t es-p10b es-p5r es-p5l"><a target="_blank" href="">Privacy</a></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p15t es-p15b">
                                                                                            <p style="font-size: 12px;">You are receiving this email because you have visited our site or asked us about the regular newsletter. Make sure our messages get to your Inbox (and not your bulk or junk folders).<br><a target="_blank" href="/" style="font-size: 12px;">Privacy police</a>&nbsp;|&nbsp;<a target="_blank" style="font-size: 12px;">Unsubscribe</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="left">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        

            `
        }

        transporter.sendMail(mail_option, function(error, info){
            if(error){
                return reject({message:`An error has occured`})
            }
            return resolve({message:"email sentss"})
        })




    response.json({
     message: 'success'
    })
    
})
})



// function sendEmail(){
//     return new Promise((resolve, reject)=>{
//         var transporter = nodemailer.createTransport({
//             host: 'mail.gelitfinance@gmail.com',
//             secureConnection: true,
//             port: 465,
//             service: 'SMTP',
//             auth:{
//                 user:"support@gelitfinance@gmail.com",
//                 pass:"78453722$Mm"
//             },
//             from:"support@gelitfinance@gmail.com",
//         });

//         const mail_option = {
//             from:`Ge-Lite <support@gelitfinance@gmail.com>`,
//             to:'queenstiles7@gmail.com',
//             subject:'LOGIN ALERT!!!',
//             text:'Your account was just loged in few seconds ago, if this was not you kindly change your password as soon as possible'
//         }

//         transporter.sendMail(mail_option, function(error, info){
//             if(error){
//                 return reject({message:`An error has occured`})
//             }
//             return resolve({message:"email sentss"})
//         })
//     })
// }

// app.get('/',(req, res)=>[
//       sendEmail()
//       .then(respones =>res.send(respones.message))
//       .catch(error => res.status(500).send(error.message))
// ])


app.listen(port, ()=>{
    console.log(`this project is working fine at http://localhost:${port}`)
});
