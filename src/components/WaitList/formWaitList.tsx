import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import axios from 'axios'

export default function formWaitList(): JSX.Element {
  const classes = useStyles()

  const [information, setInformation] = useState({
    fullName: '',
    email: '',
    twitter: '',
    near: '',
    telegram: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInformation({ ...information, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    await axios
      .post('https://nile-dao-waitlist.herokuapp.com/clients', {
        name: information.fullName,
        email: information.email,
        twitter: information.twitter,
        near_wallet: information.near,
        telegram: information.telegram,
      })
      .then(response => {
        return alert(response.data)
      })
    setInformation({
      fullName: '',
      email: '',
      twitter: '',
      near: '',
      telegram: '',
    })
  }

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.firstColumn}>
          <div className={classes.eachInput}>
            <label className={classes.label}>Full Name *</label>
            <input
              className={classes.input}
              onChange={handleChange}
              name="fullName"
              type="text"
              placeholder="Insert your Name"
              required={true}
            />
          </div>
          <div className={classes.eachInput}>
            <label className={classes.label}>Email</label>
            <input
              onChange={handleChange}
              className={classes.input}
              name="email"
              type="email"
              placeholder="Insert your Email"
              required={true}
            />
          </div>
          <div className={classes.eachInput}>
            <label className={classes.label}>Twitter</label>
            <input
              onChange={handleChange}
              className={classes.input}
              name="twitter"
              type="text"
              placeholder="Insert your Twitter account"
              required={true}
            />
          </div>
        </div>
        <div className={classes.secondColumn}>
          <div className={classes.eachInput}>
            <label className={classes.label}>NEAR Wallet (For Airdrops) *</label>
            <input
              onChange={handleChange}
              className={classes.input}
              name="near"
              type="text"
              placeholder="Insert your NEAR account"
              required={true}
            />
          </div>
          <div className={classes.eachInput}>
            <label className={classes.label}>Telegram</label>
            <input
              onChange={handleChange}
              className={classes.input}
              name="telegram"
              type="text"
              placeholder="Insert your Telegram account"
            />
          </div>
          <div className={classes.buttonDiv}>
            <Button className={classes.button} type="submit">
              JOIN US
            </Button>
          </div>
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
    marginTop: '10vh',
    zIndex: 1,
    '@media (max-width: 1280px)': {
      backgroundColor: 'transparent',
      marginTop: '2rem',
    },
  },
  form: {
    display: 'flex',
    width: '70%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    '@media (max-width: 1280px)': {
      width: '100%',
      flexDirection: 'column',
      height: 'fit-content',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  firstColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '50%',
    '@media (max-width: 1280px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  secondColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '50%',
    '@media (max-width: 1280px)': {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  eachInput: {
    display: 'flex',
    width: '100%',
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
    fontWeight: 500,
    fontFamily: ['Cairo'].join(','),
    color: '#233D91',
  },
  input: {
    width: '25rem',
    height: '3rem',
    padding: '1%',
    fontSize: '3vh',
    fontWeight: 500,
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
    width: '100%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1280px)': {
      marginTop: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  button: {
    width: '15rem',
    height: '100%',
    fontSize: '2.5vh',
    fontWeight: 800,
    color: '#FFFFff',
    backgroundColor: '#ED9700',
    border: 'transparent',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: '#F4C066',
    },
    '@media (max-width: 1280px)': {
      width: '90%',
    },
  },
})
