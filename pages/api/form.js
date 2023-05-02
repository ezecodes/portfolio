import {SMTPClient} from 'emailjs'
import dotenv from 'dotenv'
dotenv.config()

const client = new SMTPClient({
    user: process.env.mailAddress,
    password: process.env.mailPass, // This is the app-password generated on google account and not the gmail password
    host: 'smtp.gmail.com',
    ssl: true
})

export default async function handleUserForm(req, res) {
    const {method, body} = req

    if (method === 'POST') {
        const {email, name, msg} = req.body
        
        const compose = {
            from: process.env.mailAddress,
            to: process.env.mailAddress,
            subject: 'Form from portfolio site',
            text: `Email: ${email}, name: ${name}, message: ${msg}`
        }
        client.send(compose, (err, data) => {
            if (err) {
                console.error(err)
                return res.status(500).json({
                    success: false
                })
            }
            console.log(data)
            res.status(200).json({
                success: true,
                msg: 'Form received'
            })
        })
    }
}
