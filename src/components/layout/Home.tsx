import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { main } from './theme'
import './global.css'
import ImageContact from '../../assets/ImageContact.svg'
import { DefaultTheme } from '@material-ui/styles'

const theme = createMuiTheme(main)
interface Props {
  children: JSX.Element | any
}

export default function Home({ children }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <img src={ImageContact} alt="Contact Us" className={classes.image} />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

const useStyles = makeStyles<DefaultTheme>({
  image: {
    position: 'absolute',
    top: '363%',
    right: '0%',
    '@media (max-width: 1280px)': {
      display: 'none',
    },
  },
})
