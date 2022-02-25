import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { main } from './theme'
import './global.css'

const theme = createMuiTheme(main)
interface Props {
  children: JSX.Element | any
}

export default function Home({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
