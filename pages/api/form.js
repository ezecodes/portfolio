import {SMTPClient} from 'emailjs'
import dotenv from 'dotenv'
dotenv.config()

import _ from 'lodash'

const client = new SMTPClient({
    user: process.env.mailAddress,
    password: process.env.mailPass, // This is the app-password generated on google account and not the gmail password
    host: 'smtp.gmail.com',
    ssl: true
})

export default async function parseMiddleware(req, res) {
    const {name, email, message} = req.body
    if (_.isEmpty(name) || _.isEmpty(email) || _.isEmpty(message)) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in your form'
        })
    } 
    handleUserForm(req, res)
}

function handleUserForm(req, res) {
    const {method, body} = req

    if (method === 'POST') {
        const {email, name, message} = req.body
        
        const compose = {
            from: process.env.mailAddress,
            to: process.env.mailAddress,
            subject: 'Form from portfolio site',
            text: `Email: ${email}, name: ${name}, message: ${message}`
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
                msg: 'Your form has been sent'
            })
        })
    }
}
