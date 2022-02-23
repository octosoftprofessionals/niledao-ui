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

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={() => handleSubmit}>
        <div className={classes.eachInput}>
          <label className={classes.label}>Full Name</label>
          <input
            className={classes.input}
            name="name"
            type="text"
            placeholder="John Doe"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Email</label>
          <input
            className={classes.input}
            name="email"
            type="email"
            placeholder="name@email.com"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Phone Number</label>
          <input
            className={classes.input}
            name="phone"
            type="text"
            placeholder="+10000000000"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Subject</label>
          <input
            className={classes.input}
            name="subject"
            type="text"
            placeholder="Stake proposal"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Message</label>
          <textarea
            className={classes.textarea}
            name="message"
            type="text"
            placeholder="How can we help you?"
            onChange={handleChange}
          />
        </div>
        <div className={classes.buttonDiv}>
          <Button className={classes.button} type="submit">
            SEND MESSAGE
          </Button>
        </div>
      </form>
    </div>
  )
}
const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FBEACC',
    marginTop: '10vh',
    zIndex: 1,
    '@media (max-width: 1280px)': {
      backgroundColor: 'transparent',
      marginTop: '2rem',
    },
  },
  form: {
    display: 'flex',
    width: '90%',
    flexWrap: 'wrap',
    height: '35rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    '@media (max-width: 1280px)': {
      width: '100%',
      flexWrap: 'nowrap',
      height: 'fit-content',
    },
  },
  eachInput: {
    display: 'flex',
    width: '40%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginBottom: '2rem',
    '@media (max-width: 1280px)': {
      width: '90%',
    },
  },
  label: {
    fontSize: '3vh',
    fontWeight: 'bold',
    fontFamily: ['Cairo'].join(','),
    color: '#233D91',
  },
  input: {
    width: '25rem',
    height: '3rem',
    padding: '1%',
    fontSize: '3vh',
    fontWeight: 'bold',
    fontFamily: ['Cairo'].join(','),
    border: 'transparent',
    boxShadow: '0px 2px 4px rgba(4, 23, 123, 0.1)',
    borderRadius: '5px',
    color: '#ED9700',
    '&::placeholder': {
      color: '#ED9700',
    },
    '@media (max-width: 1280px)': {
      width: '100%',
    },
  },
  textarea: {
    width: '25rem',
    padding: '1%',
    fontSize: '3vh',
    resize: 'none',
    height: '12rem',
    fontWeight: 'bold',
    fontFamily: ['Cairo'].join(','),
    border: 'transparent',
    boxShadow: '0px 2px 4px rgba(4, 23, 123, 0.1)',
    borderRadius: '5px',
    color: '#ED9700',
    '&::placeholder': {
      color: '#ED9700',
    },
    '@media (max-width: 1280px)': {
      width: '100%',
    },
  },
  buttonDiv: {
    display: 'flex',
    width: '40%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1280px)': {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  button: {
    width: '15rem',
    height: '100%',
    fontSize: '2.5vh',
    marginLeft: '1rem',
    marginRight: '1rem',
    fontWeight: 800,
    color: '#FFFFff',
    backgroundColor: '#ED9700',
    border: 'transparent',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#c1622a',
    },
    '@media (max-width: 1280px)': {
      width: '90%',
    },
  },
})
