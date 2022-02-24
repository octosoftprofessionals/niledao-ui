import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import IconOne from '../../assets/IconThree1.svg'
import IconTwo from '../../assets/IconThree2.svg'
import IconThree from '../../assets/IconThree3.svg'
import Box1 from '../../assets/Box1.svg'
import Box2 from '../../assets/Box2.svg'
import Box3 from '../../assets/Box3.svg'

export default function Boxes(): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.boxes}>
        <Button className={classes.button}>
          <img src={IconOne} alt="icon" className={classes.icon} />
        </Button>
        <Typography className={classes.title}>THE FLOOD</Typography>
        <Typography className={classes.description}>Acquire $NILE</Typography>
      </div>
      <div className={classes.boxes2}>
        <Button className={classes.button}>
          <img src={IconTwo} alt="icon" className={classes.icon} />
        </Button>
        <Typography className={classes.title}>CULTIVATION</Typography>
        <Typography className={classes.description}>Stake $NILE</Typography>
      </div>
      <div className={classes.boxes3}>
        <Button className={classes.button}>
          <img src={IconThree} alt="icon" className={classes.icon} />
        </Button>
        <Typography className={classes.title}>HARVEST</Typography>
        <Typography className={classes.description}>Harvest $NILE</Typography>
      </div>
    </div>
  )
}
const useStyles = makeStyles<DefaultTheme>({
  root: {
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    height: 'fit-content',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  boxes: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '30%',
    height: 'fit-content',
    backgroundImage: `url(${Box1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '450px 450px',
    backgroundPosition: 'center',
    backgroundColor: '#FBEACC',
    margin: '1rem',
    borderRadius: '20px',
    '@media (max-width: 1024px)': {
      width: '90%',
    },
  },
  boxes2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '30%',
    height: 'fit-content',
    backgroundImage: `url(${Box2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '450px 450px',
    backgroundPosition: 'center',
    backgroundColor: '#FBEACC',
    margin: '1rem',
    borderRadius: '20px',
    '@media (max-width: 1024px)': {
      width: '90%',
    },
  },
  boxes3: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '30%',
    height: 'fit-content',
    backgroundImage: `url(${Box3})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '450px 450px',
    backgroundPosition: 'center',
    backgroundColor: '#FBEACC',
    margin: '1rem',
    borderRadius: '20px',
    '@media (max-width: 1024px)': {
      width: '90%',
    },
  },
  button: {
    width: '7rem',
    height: '7rem',
    backgroundColor: '#ED9700',
    borderRadius: '100%',
    marginTop: '4rem',
    marginBottom: '4rem',
    '&:hover': {
      cursor: 'default',
      backgroundColor: '#ED9700',
    },
  },
  title: {
    fontSize: '5vh',
    fontWeight: 900,
    color: '#ED9700',
    textTransform: 'uppercase',
  },
  description: {
    fontSize: '3vh',
    fontWeight: 900,
    color: '#233D91',
    marginTop: '2rem',
    marginBottom: '4rem',
  },
})
