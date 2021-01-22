function generateHtml({ name, phone, date, time }) {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Booking Confirmation</title>
            <style>
                * {
                    margin: 0;
                    font-family: 'Open Sans', sans-serif;
                }
                h1{
                    padding: 1rem;
                    background-color: #00ACC1;
                    color: #EEEEEE;
                    text-align: center;
                }
                p{
                    padding:  0.5rem 1rem;
                    color: #007381;
                    background-color: #FBFBFB;
                }
            </style>
        </head>
        <body>
            <h1>Booking Confirmation</h1>

            <p>Name:  ${name}</p>
            <p>Phone: ${phone}</p>
            <p>Date:  ${date}</p>
            <p>Time:  ${time}</p>
        </body>
   
        </html>`
}
exports.generateHtml = generateHtml
