import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import BigTree from '../../assets/BigTreeSecond.svg'
import Tree from '../../assets/TreeSecond.svg'

export default function NavBar(props): JSX.Element {
  const classes = useStyles()

  return (
    <div id="aboutus" className={classes.root}>
      <div className={classes.blur}></div>
      <div className={classes.titleDiv}>
        <Typography className={classes.title}>
          · The <Typography className={classes.titleVariant}>Nile</Typography>
          blesses the land with abundance,
        </Typography>
        <Typography className={classes.title}>its floods bring prosperity and fertility ·</Typography>
      </div>
      <div className={classes.divSpecialButton}>
        <Button className={classes.specialButton}>join waitlist</Button>
      </div>
      <div className={classes.container}>
        <div className={classes.treeDiv}>
          <img src={BigTree} alt="tree" className={classes.tree} />
        </div>
        <div className={classes.textDiv}>
          <div className={classes.auxDiv}>
            <img src={Tree} alt="tree" className={classes.treeSmall} />
          </div>
          <Typography variant="h1" className={classes.subTitle}>
            About Us
          </Typography>
          <Typography variant="h1" className={classes.description}>
            The flood deposits rich fertile soil along the Nile, an area that was otherwise desert, now grows crops. The
            right amount of flood creates a rich and nourishing harvest, the Nile brings nutrients to the land, allowing
            for cultivation that yields bountiful harvests.
          </Typography>
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.secondDiv}>
          <Typography variant="h1" className={classes.descriptionOrangeFirst}>
            Holding Nilecoin gets you access to new projects to fund, you become part of the flood. Your investment
            nourishes, cultivates and brings yields that you can harvest.
          </Typography>
        </div>
        <div className={classes.textDiv}>
          <Typography variant="h1" className={classes.descriptionOrangeSecond}>
            The Nile River Valley resembles a lotus flower, the ancient Egyptian symbol for the regeneration of life.
          </Typography>
        </div>
      </div>
      <div className={classes.titleDivFoot}>
        <Typography variant="h1" className={classes.title}>
          · The
          <Typography variant="h1" className={classes.titleVariant}>
            Nile
          </Typography>
          blesses the land with abundance,
        </Typography>
        <Typography variant="h1" className={classes.title}>
          its floods bring prosperity and fertility ·
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
  blur: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '30%',
    top: '160%',
    right: '0',
    boxShadow: '1px -200px 159px 200px rgba(250,246,231,1)',
    zIndex: 3,
    '@media (max-width: 1280px)': {
      top: '155%',
    },
    '@media (max-width: 1000px)': {
      top: '135%',
    },
    '@media (max-width: 750px)': {
      top: '125%',
    },
    '@media (max-width: 600px)': {
      top: '115%',
    },
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100%',
    marginBottom: '2rem',
    marginTop: '1rem',
    zIndex: 4,
    '@media (max-width: 1280px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  titleDivFoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '3rem',
    marginTop: '3rem',
    height: 'fit-content',
    zIndex: 4,
    '@media (max-width: 1280px)': {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
  },
  title: {
    display: 'flex',
    fontSize: '3vh',
    fontWeight: 900,
    color: '#233D91',
    textTransform: 'uppercase',
    '@media (max-width: 600px)': {
      fontSize: '2vh',
    },
  },
  titleVariant: {
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
  divSpecialButton: {
    display: 'none',
    '@media (max-width: 1280px)': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginBottom: '2rem',
      marginTop: '2rem',
    },
  },
  specialButton: {
    width: '90%',
    height: '100%',
    fontSize: '2.5vh',
    fontWeight: 900,
    color: '#FFFFff',
    backgroundColor: '#ED9700',
    border: 'transparent',
    borderRadius: '10px',
    zIndex: 4,
    '&:hover': {
      backgroundColor: '#c1622a',
    },
  },
  container: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    marginTop: '2rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    zIndex: 4,
    '@media (max-width: 1280px)': {
      flexDirection: 'column',
    },
  },
  treeDiv: {
    display: 'flex',
    width: '45%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
  tree: {
    width: '40rem',
  },
  textDiv: {
    display: 'flex',
    width: '45%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: '7rem',
    '@media (max-width: 1280px)': {
      marginLeft: '1rem',
      width: '90%',
    },
  },
  auxDiv: {
    display: 'flex',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTitle: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlign: 'left',
    fontSize: '5vh',
    fontWeight: 900,
    color: '#233D91',
    textTransform: 'uppercase',
    marginBottom: '1rem',
    marginTop: '1rem',
    '@media (max-width: 1280px)': {
      fontSize: '2.5vh',
    },
  },
  description: {
    fontSize: '3vh',
    color: '#233D91',
    fontWeight: 900,
    lineHeight: '3rem',
    '@media (max-width: 1280px)': {
      fontSize: '2vh',
    },
  },
  secondDiv: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: '45%',
    '@media (max-width: 1280px)': {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '90%',
    },
  },
  descriptionOrangeFirst: {
    fontSize: '3vh',
    color: '#ED9700',
    lineHeight: '3rem',
    textTransform: 'uppercase',
    fontWeight: 900,
    marginLeft: '10rem',
    '@media (max-width: 1280px)': {
      fontSize: '2vh',
      marginLeft: '1rem',
    },
  },
  descriptionOrangeSecond: {
    fontSize: '3vh',
    color: '#ED9700',
    lineHeight: '3rem',
    textTransform: 'uppercase',
    fontWeight: 900,
    '@media (max-width: 1280px)': {
      fontSize: '2vh',
    },
  },
})
