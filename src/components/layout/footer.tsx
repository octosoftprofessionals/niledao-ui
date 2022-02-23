import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DefaultTheme } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import Logo from '../../assets/LogoFooter.svg'

export default function Footer(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.logoDiv}>
        <img src={Logo} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.threeColumns}>
        <div className={classes.column}>
          <Typography variant="h6" className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum nulla congue volutpat
            facilisis. Duis sodales fringilla mauris sed blandit. Nam gravida turpis in arcu sodales auctor. Duis tempus
            faucibus turpis, vitae bibendum neque pharetra sit amet. Morbi in faucibus augue.
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography variant="h6" className={classes.descriptionTitle}>
            LINKS
          </Typography>
          <a className={classes.links} rel="noreferrer" style={{ textDecoration: 'none' }} href="#home">
            <Typography variant="h6" className={classes.description}>
              Home
            </Typography>
          </a>
          <a className={classes.links} rel="noreferrer" style={{ textDecoration: 'none' }} href="#aboutus">
            <Typography variant="h6" className={classes.description}>
              About Us
            </Typography>
          </a>
          <a className={classes.links} rel="noreferrer" style={{ textDecoration: 'none' }} href="#cycle">
            <Typography variant="h6" className={classes.description}>
              The Cycle
            </Typography>
          </a>
          <a className={classes.links} rel="noreferrer" style={{ textDecoration: 'none' }} href="#contactUs">
            <Typography variant="h6" className={classes.description}>
              Contact Us
            </Typography>
          </a>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '50vh',
    height: 'fit-content',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#233D91',
    overflow: 'hidden',
    zIndex: 1,
    paddingBottom: '10vh',
    '@media (max-width: 1280px)': {
      paddingBottom: '5vh',
      minHeight: 'fit-content',
    },
  },
  logoDiv: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '3vh',
    paddingBottom: '3vh',
    '@media (max-width: 1280px)': {
      paddingBottom: '2vh',
    },
  },
  logo: {
    width: '15rem',
  },
  threeColumns: {
    display: 'flex',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    '@media (max-width: 1280px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '50%',
    marginLeft: '10vh',
    marginRight: '10vh',
    '@media (max-width: 1280px)': {
      width: '90%',
      marginLeft: '0vh',
      marginRight: '0vh',
      marginBottom: '3rem',
    },
  },
  links: {
    display: 'flex',
    width: '100%',
  },
  descriptionTitle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#FFFFFF',
    fontWeight: 900,
    fontSize: '3vh',
    '@media (max-width: 1280px)': {
      fontSize: '3vh',
    },
  },
  description: {
    display: 'flex',
    width: '100%',
    fontWeight: 500,
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#FFFFFF',
    fontSize: '2.5vh',
  },
})
