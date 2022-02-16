import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'

export default function ContactUs(props): JSX.Element {
  const classes = useStyles()

  const [information, setInformation] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInformation({
      ...information,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setInformation({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  console.log(information)
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input name="name" type="text" placeholder="John Doe" onChange={handleChange} />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" placeholder="name@email.com" onChange={handleChange} />
        </div>
        <div>
          <label>Phone Number</label>
          <input name="phone" type="text" placeholder="+10000000000" onChange={handleChange} />
        </div>
        <div>
          <label>Subject</label>
          <input name="subject" type="text" placeholder="Stake proposal" onChange={handleChange} />
        </div>
        <div>
          <label>Message</label>
          <input name="message" type="text" placeholder="How can we help you?" onChange={handleChange} />
        </div>
        <div>
          <Button type="submit">SEND MESSAGE</Button>
        </div>
      </form>
    </div>
  )
}
const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    height: 'fit-content',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBEACC',
    zIndex: 1,
  },
})
