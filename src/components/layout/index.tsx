import React from 'react'
import Footer from './footer'
import Navigation from './navigation'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { main } from './theme'

const theme = createMuiTheme(main)
interface Props {
  children: JSX.Element | any
}
export default function Layout({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <h1>{children}</h1>
      <Footer />
    </ThemeProvider>
  )
}
