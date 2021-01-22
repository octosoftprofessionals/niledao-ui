const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'analytics.yourphysio@gmail.com',
    pass: 'yourphysio.nagpur',
  },
})
const { query } = require('./utils/hasura')
const { generateHtml } = require('./utils/generate-html')
dotenv.config()
exports.handler = async (event, _context, callback) => {
  const { name, phone, date, time } = JSON.parse(event.body)

  const result = await query({
    query: `
    mutation MyMutation($date: date!, $name: String!, $phone: String!, $time: timetz!) {
      insert_Bookings_one(object: {time: $time, phone: $phone, name: $name, date: $date}) {
        id
        name
      }
    }
    `,
    variables: { name, phone, date, time },
  }).catch(err => callback(err, null))

  const message = {
    from: 'analytics.yourphysio@gmail.com',
    to: 'analytics.yourphysio@gmail.com',
    subject: 'New booking Confirmation',
    html: generateHtml({ name, phone, date, time }),
  }
  callback(null, { statusCode: 200, body: JSON.stringify({ result }) })

  transporter.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}
