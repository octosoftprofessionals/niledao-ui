import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import ImageTitle from '../../assets/TitleThird.svg'
import Boxes from './boxes'

export default function ThirdLand(props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.titleDiv}>
        <img src={ImageTitle} alt="tree" className={classes.titleImage} />
        <Typography variant="h1" className={classes.title}>
          THE CYCLE
        </Typography>
        <div className={classes.subTitleDiv}>
          <Typography variant="h1" className={classes.subtitle}>
            The
            <Typography variant="h1" className={classes.subtitleVariant}>
              Nile
            </Typography>
            has a cycle of three seasons;
          </Typography>
          <Typography variant="h1" className={classes.subtitle}>
            the flood, agriculture and harvest.
          </Typography>
        </div>
      </div>
      <Boxes />
      <div className={classes.foot}>
        <Typography variant="h6" className={classes.subtitleFoot}>
          · The
          <Typography variant="h6" className={classes.subtitleVariantFoot}>
            Nile
          </Typography>
          means life and this cycle
        </Typography>
        <Typography variant="h6" className={classes.subtitleFoot}>
          brought prosperity to people ·
        </Typography>
      </div>
    </div>
  )
}
const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    height: 'fit-content',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 1,
    '@media (max-width: 1280px)': {
      minHeight: 'fit-content',
    },
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    marginBottom: '2rem',
    marginTop: '1rem',
    height: 'fit-content',
    zIndex: 4,
  },
  titleImage: {
    width: '4rem',
    height: '4rem',
    marginBottom: '5rem',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '5vh',
    fontWeight: 900,
    color: '#233D91',
    textTransform: 'uppercase',
    marginBottom: '5rem',
  },
  subTitleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '5rem',
    height: 'fit-content',
    zIndex: 4,
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  subtitle: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 900,
    color: '#ED9700',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '2vh',
    },
  },
  subtitleFoot: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 500,
    color: '#233D91',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '2vh',
    },
  },
  subtitleVariantFoot: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 500,
    color: '#6C8EFE',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '2vh',
    },
  },
  subtitleVariant: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 900,
    color: '#EA6B0F',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    textTransform: 'uppercase',
    '@media (max-width: 1024px)': {
      fontSize: '2vh',
    },
  },
  foot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
    marginBottom: '5rem',
    marginTop: '5rem',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
})
