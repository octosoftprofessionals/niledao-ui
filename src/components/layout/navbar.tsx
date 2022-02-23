import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import useWindowSize from '../../utils/size'
import { DefaultTheme } from '@material-ui/styles'
import Logo from '../../assets/LogoNavBar.svg'
import IconNavbar from '../../assets/IconNavbar.svg'

export default function NavBar(props): JSX.Element {
  const { width } = useWindowSize()

  const [dropOpen, setDropOpen] = useState(false)

  const [fixDrop, setFixDrop] = useState(false)

  const classes = useStyles()
  const handleDrop = () => {
    setDropOpen(!dropOpen)
    setFixDrop(!fixDrop)
  }

  useEffect(() => {
    if (width < 1280) {
      console.log(width)
      setDropOpen(false)
      setFixDrop(false)
    }
  }, [width])
  console.log(dropOpen)
  console.log(fixDrop)
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.divLogo}>
            <img src={Logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.divLinks}>
            {width > 1280 ? (
              <>
                <Button className={classes.buttons}>home</Button>
                <Button className={classes.buttons}>about us</Button>
                <Button className={classes.buttons}>the cycle</Button>
                <Button className={classes.buttons}>contact us</Button>
                <Button className={classes.specialButton}>join waitlist</Button>
              </>
            ) : (
              <>
                {!dropOpen ? (
                  <Button className={classes.buttonResponsive} onClick={() => handleDrop()}>
                    <img src={IconNavbar} alt="IconNavbar" className={classes.iconNavbar} />
                  </Button>
                ) : (
                  <Button className={classes.buttonResponsiveClose} onClick={() => handleDrop()}>
                    <img src={IconNavbar} alt="IconNavbar" className={classes.iconNavbar} />
                  </Button>
                )}
              </>
            )}
          </div>
          {width < 1280 && fixDrop ? (
            <div className={dropOpen ? classes.visible : classes.hidden}>
              <Button className={classes.buttons}>home</Button>
              <Button className={classes.buttons}>about us</Button>
              <Button className={classes.buttons}>the cycle</Button>
              <Button className={classes.buttons}>contact us</Button>
              <Button className={classes.specialButton}>join waitlist</Button>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}

const useStyles = makeStyles<DefaultTheme>(theme => ({
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
    '@media (max-width: 1280px)': {
      justifyContent: 'center',
    },
  },
  divLogo: {
    display: 'flex',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconNavbar: {
    width: '3rem',
  },
  buttonResponsive: {
    width: '5rem',
    height: '10vh',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    transitionDuration: '1s',
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 0.5,
    },
  },
  buttonResponsiveClose: {
    width: '5rem',
    height: '10vh',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    backgroundColor: 'transparent',
    transform: 'rotate(90deg)',
    border: 'none',
    transitionDuration: '1s',
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 0.5,
    },
  },
  divLinks: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '@media (max-width: 1280px)': {
      width: '100%',
    },
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
    '@media (max-width: 1280px)': {
      width: '10rem',
      margin: '0',
      marginBottom: '1rem',
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
    '@media (max-width: 1280px)': {
      width: '10rem',
      margin: '0',
      marginBottom: '1rem',
    },
  },
  visible: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 'fit-content',
    top: '13vh',
    backgroundColor: '#FFF6E7',
    border: '5px solid #ED9700',
    boxShadow: 'none',
    zIndex: 10,
    animation: `$bounceInLeft 1s`,
  },
  hidden: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    height: 'fit-content',
    top: '13vh',
    backgroundColor: '#FFF6E7',
    border: '5px solid #ED9700',
    boxShadow: 'none',
    zIndex: 10,
    animation: `$bounceOutLeft 1s ${theme.transitions.easing.easeInOut}`,
  },
  '@keyframes bounceOutLeft': {
    '0%': {
      transform: 'translateX(0)',
    },
    '20%': {
      opacity: 1,
      transform: 'translateX(20px)',
    },
    '100%': {
      opacity: 0,
      transform: 'translateX(-2000px)',
    },
  },
  '@keyframes bounceInLeft': {
    '0%': {
      opacity: 0,
      transform: 'translateX(-2000px);',
    },
    '60%': {
      opacity: 1,
      transform: ' translateX(30px);',
    },
    '80%': {
      transform: 'translateX(-10px);',
    },
    '100%': {
      transform: 'translateX(0);',
    },
  },
}))
