import React from 'react'
import Footer from './footer'
import NavBar from './navbar'
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { main } from './theme'
import { DefaultTheme } from '@material-ui/styles'
import './global.css'

const theme = createMuiTheme(main)
interface Props {
  children: JSX.Element | any
}

export default function Layout({ children }: Props): JSX.Element {
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <main>{children}</main>
    </ThemeProvider>
  )
}
const useStyles = makeStyles<DefaultTheme>({})
