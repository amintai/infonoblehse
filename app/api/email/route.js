import { render } from '@react-email/render'
// import { SpringSalesMail } from '../../../react-email-starter/emails/spring-sales'
import VercelInviteUserEmail from '@/components/emailContent';
import nodemailer from 'nodemailer';

export async function POST(req) {
  const { first_name, last_name , email, remark } = await req.json()

  
  const emailHtml = render(VercelInviteUserEmail({ 
    first_name,
    last_name,
    email,
    remark,
  }))

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `✅✅✅ Hi, Infonoblehse You got an inquiry from ${first_name}`,
    html: emailHtml,
  }

  if (!first_name || !email) {
    return new Response(
      JSON.stringify({ message: 'Please submit your name and email' }),
      { status: 400 }
    )
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error)
      return new Response(
        JSON.stringify({ message: 'Error: Could not send email' }),
        { status: 400 }
      )
    }

    console.log('Email sent: ' + info.response)
    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      { status: 200 }
    )
  })
}
