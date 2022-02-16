import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { DefaultTheme } from '@material-ui/styles'
import Icon from '../../assets/IconContact.svg'
import ImageContact from '../../assets/ImageContact.svg'
import Form from './formComponent'

export default function ContactUs(props): JSX.Element {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img src={ImageContact} alt="Contact Us" className={classes.image} />
      <div className={classes.titleDiv}>
        <Typography variant="h1" className={classes.title}>
          CONTACT US
        </Typography>
        <img src={Icon} alt="icon" className={classes.icon} />
      </div>
      <Form />
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
    backgroundColor: '#FBEACC',
    zIndex: 1,
  },
  titleDiv: {
    display: 'flex',
    width: '90%',
    height: 'fit-content',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10vh',
  },
  title: {
    fontSize: '6vh',
    color: '#233D91',
    fontWeight: 900,
  },
  icon: {
    width: '3rem',
    height: '3rem',
    marginLeft: '2rem',
  },
  image: {
    position: 'absolute',
    right: '0',
    top: '330vh',
    zIndex: 2,
  },
})
