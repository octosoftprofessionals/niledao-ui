import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DefaultTheme } from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import Logo from '../../assets/LogoFooter.svg'
import { Link } from 'gatsby'

export default function Footer(): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.logoDiv}>
        <img src={Logo} alt="Logo" className={classes.logo} />
      </div>
      <div className={classes.threeColumns}>
        <div className={classes.column}>
          <Typography className={classes.description}>
            The flood deposits rich fertile soil along the Nile, an area that was otherwise desert, now grows crops. The
            right amount of flood creates a rich and nourishing harvest, the Nile brings nutrients to the land, allowing
            for cultivation that yields bountiful harvests.
          </Typography>
        </div>
        <div className={classes.column}>
          <Typography className={classes.descriptionTitle}>LINKS</Typography>
          <Link className={classes.links} to="/#home" style={{ textDecoration: 'none' }}>
            <Typography className={classes.description}>Home</Typography>
          </Link>
          <Link className={classes.links} to="/#aboutus" style={{ textDecoration: 'none' }}>
            <Typography className={classes.description}>About Us</Typography>
          </Link>
          <Link className={classes.links} to="/#cycle" style={{ textDecoration: 'none' }}>
            <Typography className={classes.description}>The Cycle</Typography>
          </Link>
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
