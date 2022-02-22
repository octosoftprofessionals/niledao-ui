import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import Ruby from '../../assets/Ruby.svg'
import Lines from '../../assets/FirstLines.svg'
import Tree from '../../assets/Tree.svg'
import Pyramid from '../../assets/PyramidFirst.svg'

export default function NavBar(props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={Pyramid} className={classes.Pyramid} alt="Pyramid" />
      <img src={Ruby} className={classes.ruby} alt="ruby" />
      <img src={Lines} className={classes.Lines} alt="Lines" />
      <div className={classes.container}>
        <div className={classes.auxDiv}>
          <div className={classes.logoDiv}>
            <img src={Tree} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.titleDiv}>
            <Typography variant="h1" className={classes.title}>
              WELCOME TO NILE DAO
            </Typography>
            <Typography variant="h3" className={classes.subtitle}>
              The first Tomb Fork on NEAR Protocol
            </Typography>
            <Typography variant="h5" className={classes.description}>
              Stake your NILE along the river delta to earn rebates. Then stake your earned LOTUS to eran more NILE!
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '125vh',
    height: 'fit-content',
    paddingTop: '12vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 1,
    overflow: 'hidden',
    '@media (max-width: 1280px)': {
      minHeight: '125vh',
    },
    '@media (max-width: 1000px)': {
      minHeight: '125vh',
    },
    '@media (max-width: 600px)': {
      minHeight: '80vh',
    },
  },
  Pyramid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '30%',
    right: '0',
    zIndex: 2,
    '@media (max-width: 1280px)': {
      top: '30%',
    },
    '@media (max-width: 1000px)': {
      top: '10%',
    },
  },
  ruby: {
    width: '36%',
    position: 'absolute',
    top: '45%',
    right: '17%',
    zIndex: 3,
    '@media (max-width: 1280px)': {
      width: '50%',
      top: '40%',
      right: '0',
    },
    '@media (max-width: 1000px)': {
      width: '60%',
      top: '30%',
    },
    '@media (max-width: 600px)': {
      top: '43%',
    },
  },
  Lines: {
    position: 'absolute',
    top: '70%',
    left: '10%',
    zIndex: 2,
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  container: {
    display: 'flex',
    width: '100%',
    height: '65vh',
    alignItems: 'flex-start',
    paddingTop: '15vh',
    justifyContent: 'flex-start',
    backgroundColor: '#F4C066',
    zIndex: 1,
    '@media (max-width: 1280px)': {
      paddingTop: '15vh',
      height: '55vh',
    },
    '@media (max-width: 1000px)': {
      height: '44vh',
      paddingTop: '10vh',
    },
    '@media (max-width: 600px)': {
      height: '40vh',
    },
  },
  auxDiv: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '5vh',
    '@media (max-width: 1280px)': {
      paddingLeft: '1rem',
    },
  },
  logoDiv: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '10%',
    height: 'fit-content',
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  logo: {
    width: '8rem',
    height: '8rem',
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    width: '50%',
    '@media (max-width: 1280px)': {
      width: '65%',
    },
  },
  title: {
    display: 'flex',
    fontSize: '7vh',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#233D91',
    marginBottom: '1rem',
    '@media (max-width: 1280px)': {
      fontSize: '7vh',
    },
    '@media (max-width: 1000px)': {
      width: '100vw',
      fontSize: '4vh',
    },
  },
  subtitle: {
    fontSize: '5vh',
    fontWeight: 900,
    color: '#EA6B0F',
    marginBottom: '1rem',
    '@media (max-width: 1280px)': {
      fontSize: '4vh',
    },
    '@media (max-width: 1000px)': {
      fontSize: '3vh',
    },
  },
  description: {
    display: 'flex',
    width: '80%',
    fontSize: '3vh',
    fontWeight: 500,
    color: '#000F41',
    marginBottom: '1rem',
    marginTop: '1rem',
    '@media (max-width: 1280px)': {
      fontSize: '3vh',
    },
    '@media (max-width: 1000px)': {
      fontSize: '2vh',
    },
  },
})
