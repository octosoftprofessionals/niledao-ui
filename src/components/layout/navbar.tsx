import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import useWindowSize from '../../utils/size'
import { DefaultTheme } from '@material-ui/styles'
import Logo from '../../assets/LogoNavBar.svg'
import IconNavbar from '../../assets/IconNavbar.svg'
import CloseNavbar from '../../assets/closeNavbar.svg'
import { Link } from 'gatsby'

export default function NavBar(): JSX.Element {
  const { width } = useWindowSize()

  const [dropOpen, setDropOpen] = useState(false)

  const [fixDrop, setFixDrop] = useState(false)

  const classes = useStyles()
  const handleDrop = () => {
    setDropOpen(!dropOpen)
    setFixDrop(!fixDrop)
  }

  useEffect(() => {
    if (width <= 1280) {
      setDropOpen(false)
      setFixDrop(false)
    }
  }, [width])

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
                <Link className={classes.links} to="/#home" style={{ textDecoration: 'none' }}>
                  <Button className={classes.buttons}>home</Button>
                </Link>
                <Link className={classes.links} to="/#aboutus" style={{ textDecoration: 'none' }}>
                  <Button className={classes.buttons}>about us</Button>
                </Link>
                <Link className={classes.links} to="/#cycle" style={{ textDecoration: 'none' }}>
                  <Button className={classes.buttons}>the cycle</Button>
                </Link>
                <Link className={classes.links} to="/#Waitlist" style={{ textDecoration: 'none' }}>
                  <Button className={classes.specialButton}>join waitlist</Button>
                </Link>
              </>
            ) : (
              <>
                {!dropOpen ? (
                  <Button className={classes.buttonResponsive} onClick={() => handleDrop()}>
                    <img src={IconNavbar} alt="IconNavbar" className={classes.iconNavbar} />
                  </Button>
                ) : (
                  <Button className={classes.buttonResponsive} onClick={() => handleDrop()}>
                    <img src={CloseNavbar} alt="IconNavbar" className={classes.iconNavbarClose} />
                  </Button>
                )}
              </>
            )}
          </div>
          {width < 1280 && fixDrop ? (
            <div className={dropOpen ? classes.visible : classes.hidden}>
              <Link className={classes.links} to="/#aboutus" style={{ textDecoration: 'none' }}>
                <Button className={classes.buttons}>about us</Button>
              </Link>
              <Link className={classes.links} to="/#cycle" style={{ textDecoration: 'none' }}>
                <Button className={classes.buttons}>the cycle</Button>
              </Link>
              <Link className={classes.links} to="/#Waitlist" style={{ textDecoration: 'none' }}>
                <Button className={classes.specialButton}>Waitlist</Button>
              </Link>
            </div>
          ) : null}
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
    zIndex: 15,
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
    width: '2.5rem',
  },
  iconNavbarClose: {
    width: '5rem',
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
  divLinks: {
    display: 'flex',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    '@media (max-width: 1280px)': {
      width: '100%',
    },
  },
  links: {
    display: 'flex',
    '@media (max-width: 1280px)': {
      width: '100%',
    },
  },
  specialButton: {
    width: '10rem',
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
    '@media (max-width: 1280px)': {
      fontWeight: 500,
      width: '100%',
      height: '4rem',
      margin: '0',
      borderRadius: '0',
    },
  },
  buttons: {
    width: '10rem',
    height: '12vh',
    fontSize: '2.5vh',
    fontWeight: 800,
    borderRadius: '0px',
    color: '#233D91',
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      borderBottom: '5px solid #233D91',
    },
    '@media (max-width: 1280px)': {
      fontWeight: 500,
      width: '100%',
      height: '4rem',
      margin: '0',
    },
  },
  visible: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
    height: 'fit-content',
    top: '12vh',
    right: '0',
    backgroundColor: '#FFF6E7',
    boxShadow: '-14px 21px 31px -6px rgba(0,0,0,0.5);',
    zIndex: 10,
    animation: `$bounceInLeft 1s`,
  },
  hidden: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '65%',
    height: 'fit-content',
    top: '12vh',
    right: '0',
    backgroundColor: '#FFF6E7',
    boxShadow: '-14px 21px 31px -6px rgba(0,0,0,0.5);',
    zIndex: 10,
    animation: `$bounceOutLeft 1s`,
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
})
