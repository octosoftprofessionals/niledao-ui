import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import Ruby from '../../assets/Ruby.svg'
import Tree from '../../assets/Tree.svg'
import Pyramid from '../../assets/PyramidFirst.svg'

export default function NavBar(): JSX.Element {
  const classes = useStyles()

  return (
    <div id="home" className={classes.root}>
      <div className={classes.container}>
        <div className={classes.divSeparate}>
          <div className={classes.auxDiv}>
            <div className={classes.logoDiv}>
              <img src={Tree} alt="logo" className={classes.logo} />
            </div>
            <div className={classes.titleDiv}>
              <Typography className={classes.title}>WELCOME TO NILE DAO</Typography>
              <Typography className={classes.subtitle}>The first Tomb Fork on NEAR Protocol</Typography>
              <Typography className={classes.description}>
                Stake your NILE along the river delta to earn rebates. Then stake your earned LOTUS to eran more NILE!
              </Typography>
            </div>
            <img src={Ruby} className={classes.ruby} alt="ruby" />
          </div>
          <img src={Pyramid} className={classes.Pyramid} alt="Pyramid" />
        </div>
      </div>
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
    overflow: 'hidden',
  },
  Pyramid: {
    width: '100%',
    height: 'fit-content',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    zIndex: 2,
    borderBottom: '30px solid #FFF6E7',
  },
  ruby: {
    width: '30%',
    zIndex: 3,
    position: 'absolute',
    right: '20%',
    top: '30%',
    '@media (max-width: 1280px)': {
      top: '40%',
    },
    '@media (max-width: 600px)': {
      right: '0',
      width: '40%',
      top: '50%',
    },
  },
  container: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    zIndex: 1,
    backgroundColor: '#F4C066',

  },
  divSeparate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
    padding: '0 0 0 0',
    margin: '0 0 0 0',
    paddingTop: '20vh',

  },
  auxDiv: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
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
    fontWeight: 700,
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
