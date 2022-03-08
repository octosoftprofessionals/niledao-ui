import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import Icon from '../../assets/IconContact.svg'
import Form from './formWaitList'
import Telegram from '../../assets/Telegram.svg'

export default function WaitList(): JSX.Element {
  const classes = useStyles()

  return (
    <div id="#Waitlist" className={classes.root}>
      <div className={classes.titleDiv}>
        <Typography className={classes.title}>
          WAITLIST
          <img src={Icon} alt="icon" className={classes.icon} />
        </Typography>
      </div>
      <Form />
      <a href="https://t.me/+ZKLf1J0DMz44M2Jh" rel="noreferrer" target="_blank" className={classes.footButton}>
        <Button className={classes.button}>
          JOIN OUR TELEGRAM
          <img src={Telegram} alt="telegram" className={classes.imageButton} />
        </Button>
      </a>
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
    zIndex: 1,
    background: `linear-gradient(180deg, rgba(251,234,204,1) 40%, rgba(255,246,231,1) 100%)`,
    marginTop: '5vh',
    paddingBottom: '10vh',
    '@media (max-width: 1280px)': {
      backgroundColor: 'transparent',
      alignItems: 'flex-start',
      marginTop: '0',
    },
  },
  titleDiv: {
    display: 'flex',
    width: '80%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: '10rem',
    '@media (max-width: 1280px)': {
      marginTop: '5rem',
    },
  },
  title: {
    marginLeft: '10vh',
    fontSize: '6vh',
    color: '#233D91',
    fontWeight: 500,
    '@media (max-width: 1280px)': {
      marginLeft: '1rem',
      fontSize: '4vh',
    },
  },
  imageBig: {
    display: 'flex',
    position: 'absolute',
    right: '0',
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  icon: {
    width: '3rem',
    height: '3rem',
    marginLeft: '2rem',
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  footButton: {
    display: 'flex',
    width: '100%',
    textDecoration: 'none',
    height: 'fit-content',
    alignItems: 'center',
    marginTop: '5rem',
    marginBottom: '5rem',
    justifyContent: 'center',
    '@media (max-width: 1280px)': {
      marginTop: '10rem',
    },
  },
  button: {
    width: '25rem',
    height: '100%',
    fontSize: '3vh',
    fontWeight: 500,
    backgroundColor: 'transparent',
    border: '5px solid #6C8EFE',
    color: '#233D91',
    textDecoration: 'none',
    borderRadius: '10px',
    zIndex: 5,
    '&:hover': {
      opacity: 0.8,
    },
    '@media (max-width: 1280px)': {
      width: '90%',
      height: '4rem',
      margin: '0',
    },
  },
  imageButton: {
    display: 'flex',
    width: '2rem',
    height: '2rem',
    marginLeft: '0.5rem',
  },
})
