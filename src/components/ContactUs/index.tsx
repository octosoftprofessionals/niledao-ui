import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import Icon from '../../assets/IconContact.svg'
import Form from './formComponent'

export default function ContactUs(props): JSX.Element {
  const classes = useStyles()

  return (
    <div id="contactUs" className={classes.root}>
      <div className={classes.titleDiv}>
        <Typography variant="h1" className={classes.title}>
          CONTACT US
        </Typography>
        <img src={Icon} alt="icon" className={classes.icon} />
      </div>
      <Form />
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
    zIndex: 1,
    paddingBottom: '10vh',
    '@media (max-width: 1024px)': {
      backgroundColor: 'transparent',
    },
  },
  titleDiv: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10vh',
    '@media (max-width: 1024px)': {
      paddingTop: '0',
    },
  },
  title: {
    marginLeft: '10vh',
    fontSize: '6vh',
    color: '#233D91',
    fontWeight: 900,
    '@media (max-width: 1280px)': {
      marginLeft: '1rem',
      fontSize: '4vh',
    },
  },
  icon: {
    width: '3rem',
    height: '3rem',
    marginLeft: '2rem',
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
})
