import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import Icon from '../../assets/IconContact.svg'
import Form from './formWaitList'

export default function WaitList(): JSX.Element {
  const classes = useStyles()

  return (
    <div id="contactUs" className={classes.root}>
      <div className={classes.titleDiv}>
        <Typography className={classes.title}>
          WAITLIST
          <img src={Icon} alt="icon" className={classes.icon} />
        </Typography>
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
    zIndex: 1,
    marginTop: '10vh',
    paddingBottom: '10vh',
    '@media (max-width: 1024px)': {
      marginTop: '15vh',
      backgroundColor: 'transparent',
    },
  },
  image: {
    display: 'none',
    '@media (max-width: 1024px)': {
      display: 'flex',
      width: '100%',
      height: 'fit-content',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1rem',
      marginTop: '1rem',
    },
  },
  blur: {
    display: 'flex',
    width: '100%',
    height: '5rem',
    boxShadow: '1px -61px 47px 0px rgba(255, 246, 231,1)',
    backgroundColor: '#FFF6E7',
    zIndex: 5,
  },
  titleDiv: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '10vh',
    '@media (max-width: 1024px)': {
      paddingTop: '0',
    },
  },
  title: {
    marginLeft: '10vh',
    fontSize: '6vh',
    color: '#233D91',
    fontWeight: 500,
    '@media (max-width: 1024px)': {
      marginLeft: '1rem',
      fontSize: '4vh',
    },
  },
  imageBig: {
    display: 'flex',
    position: 'absolute',
    right: '0',
    '@media (max-width: 1024px)': {
      display: 'none',
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
