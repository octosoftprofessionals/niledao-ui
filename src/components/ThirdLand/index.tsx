import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import ImageTitle from '../../assets/TitleThird.svg'
import Boxes from './boxes'
import Telegram from '../../assets/Telegram.svg'
import ImageContact from '../../assets/TriangleThird.svg'
import Image from '../../assets/contactResponsive.svg'
import Rectangle from '../../assets/Rectangle.svg'

export default function ThirdLand(): JSX.Element {
  const classes = useStyles()

  return (
    <div id="cycle" className={classes.root}>
      <div className={classes.titleDiv}>
        <img src={ImageTitle} alt="tree" className={classes.titleImage} />
        <Typography className={classes.title}>THE CYCLE</Typography>
        <div className={classes.subTitleDiv}>
          <div className={classes.firstPart}>
            <Typography className={classes.subtitle}>
              The
              <Typography className={classes.subtitleVariant}>Nile</Typography>
              has a cycle of three seasons;
            </Typography>
          </div>
          <div className={classes.secondPart}>
            <Typography className={classes.subtitle}>the flood, agriculture and harvest.</Typography>
          </div>
        </div>
      </div>
      <Boxes />
      <div className={classes.foot}>
        <img src={Rectangle} alt="" className={classes.rectangle} />
        <img src={ImageContact} alt="" className={classes.imageFoot} />
        <div className={classes.divTextFoot}>
          <div className={classes.firstPart}>
            <Typography className={classes.subtitleFoot}>
              · The
              <Typography className={classes.subtitleVariantFoot}>Nile</Typography>
              means life and this cycle
            </Typography>
          </div>
          <div className={classes.secondPart}>
            <Typography className={classes.subtitleFoot}>brought prosperity to people ·</Typography>
          </div>
        </div>
      </div>
      <div className={classes.image}>
        <img src={Image} alt="Responsive" className={classes.imageResponsive} />
        <div className={classes.blur}></div>
      </div>
      <a href="https://t.me/+ZKLf1J0DMz44M2Jh" rel="noreferrer" target="_blank" className={classes.footButton}>
        <Button className={classes.button}>
          JOIN OUR TELEGRAM
          <img src={Telegram} alt="telegram" className={classes.imageButton} />
        </Button>
      </a>
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
    '@media (max-width: 1280px)': {
      marginTop: '1rem',
    },
  },
  firstPart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0',
    padding: '0',
    width: 'fit-content',
    height: 'fit-content',
  },
  secondPart: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 'fit-content',
    height: 'fit-content',
    margin: '0',
    padding: '0',
    marginLeft: '0.5rem',
    '@media (max-width: 1280px)': {
      margin: '0',
    },
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
      marginBottom: '1rem',
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
    '@media (max-width: 600px)': {
      fontSize: '2vh',
    },
  },
  subtitleFoot: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 900,
    color: '#233D91',
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
      fontSize: '2vh',
    },
  },
  subtitleVariantFoot: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 900,
    color: '#6C8EFE',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
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
    '@media (max-width: 600px)': {
      fontSize: '2vh',
    },
  },
  foot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
    marginBottom: '10rem',
    marginTop: '10rem',
    '@media (max-width: 1024px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: '5rem',
      marginBottom: '5rem',
    },
  },
  divTextFoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 5,
    '@media (max-width: 1024px)': {
      marginBottom: '1rem',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  imageFoot: {
    display: 'flex',
    position: 'absolute',
    top: '',
    right: '0',
    zIndex: 2,
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  rectangle: {
    display: 'flex',
    width: '100%',
    height: '100%',
    marginTop: '5rem',
    position: 'absolute',
    zIndex: 3,
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  footButton: {
    display: 'flex',
    width: '100%',
    textDecoration: 'none',
    height: 'fit-content',
    alignItems: 'center',
    marginBottom: '5rem',
    justifyContent: 'center',
  },
  button: {
    width: '20rem',
    height: '100%',
    fontSize: '3vh',
    fontWeight: 800,
    color: '#FFFFff',
    backgroundColor: '#ED9700',
    border: 'transparent',
    borderRadius: '10px',
    zIndex: 5,
    '&:hover': {
      backgroundColor: '#F4C066',
    },
    '@media (max-width: 1024px)': {
      width: '90%',
      height: '4rem',
      margin: '0',
    },
  },
  imageButton: {
    display: 'flex',
    width: '2rem',
    height: '2rem',
    marginLeft: '0.5rem',
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
})
