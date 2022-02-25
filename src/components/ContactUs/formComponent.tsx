import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import { send } from 'emailjs-com'

export default function ContactUs(): JSX.Element {
  const classes = useStyles()

  const [data, setData] = useState({
    user_id: '',
    service_id: '',
    template_id: '',
  })

  const [information, setInformation] = useState({
    user_name: '',
    user_email: '',
    message: '',
    user_phone: '',
    user_subject: '',
  })

  useEffect(() => {
    const fetchData = async () => {
      const result = {
        user_id: process.env.REACT_APP_USER_ID,
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
      }
      setData(result)
    }
    fetchData()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInformation({ ...information, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    await send(data.service_id, data.template_id, information, data.user_id)
      .then(response => {
        console.log('SUCCESS!', response.status, response.text)
        alert('Your message has been sent!')
      })
      .catch(err => {
        console.log('FAILED...', err)
      })

    setInformation({
      user_name: '',
      user_email: '',
      message: '',
      user_phone: '',
      user_subject: '',
    })
  }

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.eachInput}>
          <label className={classes.label}>Full Name</label>
          <input
            className={classes.input}
            onChange={handleChange}
            name="user_name"
            type="text"
            placeholder="John Doe"
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Email</label>
          <input
            onChange={handleChange}
            className={classes.input}
            name="user_email"
            type="email"
            placeholder="name@email.com"
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Phone Number</label>
          <input
            onChange={handleChange}
            className={classes.input}
            name="user_phone"
            type="text"
            placeholder="+10000000000"
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Subject</label>
          <input
            onChange={handleChange}
            className={classes.input}
            name="user_subject"
            type="text"
            placeholder="Stake proposal"
            required={true}
          />
        </div>
        <div className={classes.eachInput}>
          <label className={classes.label}>Message</label>
          <textarea
            onChange={handleChange}
            className={classes.textarea}
            name="message"
            placeholder="How can we help you?"
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
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
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
    '@media (max-width: 1024px)': {
      width: '100%',
    },
  },
  buttonDiv: {
    display: 'flex',
    width: '40%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
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
      backgroundColor: '#F4C066',
    },
    '@media (max-width: 1024px)': {
      width: '90%',
    },
  },
})
