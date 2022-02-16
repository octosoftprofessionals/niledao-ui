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
  },
  Pyramid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '30%',
    right: '0',
    zIndex: 2,
  },
  ruby: {
    width: '36%',
    position: 'absolute',
    top: '45%',
    right: '17%',
    zIndex: 3,
  },
  Lines: {
    position: 'absolute',
    top: '70vh',
    left: '25vh',
    zIndex: 2,
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
  },
  auxDiv: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: '5vh',
  },
  logoDiv: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '10%',
    height: 'fit-content1',
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
  },
  title: {
    fontSize: '7vh',
    fontWeight: 900,
    textTransform: 'uppercase',
    color: '#233D91',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '5vh',
    fontWeight: 900,
    color: '#EA6B0F',
    marginBottom: '1rem',
  },
  description: {
    display: 'flex',
    width: '80%',
    fontSize: '3vh',
    fontWeight: 500,
    color: '#000F41',
    marginBottom: '1rem',
    marginTop: '1rem',
  },
})
