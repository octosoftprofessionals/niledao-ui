import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import useWindowSize from '../../utils/size'
import { DefaultTheme } from '@material-ui/styles'
import Logo from '../../assets/LogoNavBar.svg'

export default function NavBar(props): JSX.Element {
  const { width } = useWindowSize()

  const classes = useStyles()

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.divLogo}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.divLinks}>
            <Button className={classes.buttons}>home</Button>
            <Button className={classes.buttons}>about us</Button>
            <Button className={classes.buttons}>the cycle</Button>
            <Button className={classes.buttons}>contact us</Button>
            <Button className={classes.specialButton}>join waitlist</Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

const useStyles = makeStyles<DefaultTheme>({
  appBar: {
    display: 'flex',
    backgroundColor: '#FFF6E7',
    height: '12vh',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    transition: 'background-color 1s ease',
    zIndex: 5,
  },
  toolBar: {
    display: 'flex',
    width: '90%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '@media (max-width: 1024px)': {
      justifyContent: 'center',
    },
  },
  divLogo: {
    display: 'flex',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  divLinks: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  specialButton: {
    width: '12rem',
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
  },
  buttons: {
    width: '10rem',
    height: '12vh',
    fontSize: '2.5vh',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    fontWeight: 800,
    color: '#233D91',
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      borderBottom: '5px solid #233D91',
    },
  },
})
