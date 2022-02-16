import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import BigTree from '../../assets/BigTreeSecond.svg'
import Tree from '../../assets/TreeSecond.svg'

export default function NavBar(props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.blur}></div>
      <div className={classes.titleDiv}>
        <Typography variant="h1" className={classes.title}>
          · The
        </Typography>
        <Typography variant="h1" className={classes.titleVariant}>
          Nile
        </Typography>
        <Typography variant="h1" className={classes.title}>
          blesses the land with abundance, its floods bring prosperity and fertility ·
        </Typography>
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
          <Typography variant="h1" className={classes.descriptionOrange}>
            Holding Nilecoin gets you access to new projects to fund, you become part of the flood. Your investment
            nourishes, cultivates and brings yields that you can harvest.
          </Typography>
        </div>
        <div className={classes.textDiv}>
          <Typography variant="h1" className={classes.descriptionOrange}>
            The Nile River Valley resembles a lotus flower, the ancient Egyptian symbol for the regeneration of life.
          </Typography>
        </div>
      </div>
      <div className={classes.titleDivFoot}>
        <Typography variant="h1" className={classes.title}>
          · The
        </Typography>
        <Typography variant="h1" className={classes.titleVariant}>
          Nile
        </Typography>
        <Typography variant="h1" className={classes.title}>
          blesses the land with abundance, its floods bring prosperity and fertility ·
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
  },
  blur: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '15vh',
    top: '151vh',
    right: '0',
    boxShadow: '1px -200px 159px 200px rgba(255,246,231,1)',
    zIndex: 3,
  },
  titleDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '2rem',
    marginTop: '1rem',
    height: 'fit-content',
    zIndex: 4,
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
  },
  title: {
    fontSize: '3vh',
    fontWeight: 900,
    color: '#233D91',
    textTransform: 'uppercase',
  },
  titleVariant: {
    fontSize: '3vh',
    fontWeight: 900,
    color: '#6C8EFE',
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    textTransform: 'uppercase',
  },
  container: {
    display: 'flex',
    width: '100%',
    height: 'fit-content',
    marginTop: '2rem',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    zIndex: 4,
  },
  treeDiv: {
    display: 'flex',
    width: '50rem',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '5rem',
  },
  tree: {
    width: '40rem',
  },
  textDiv: {
    display: 'flex',
    width: '40%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
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
  },
  description: {
    fontSize: '3vh',
    color: '#233D91',
    lineHeight: '3rem',
  },
  secondDiv: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: '2rem',
    paddingRight: '8rem',
    width: '45rem',
  },
  descriptionOrange: {
    fontSize: '3vh',
    color: '#F4C066',
    lineHeight: '3rem',
    textTransform: 'uppercase',
    fontWeight: 900,
  },
})
