import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import { main } from './theme'
import Image from '../../assets/LogoNavBar.svg'
import './global.css'

const theme = createMuiTheme(main)
interface Props {
  children: JSX.Element | any
}

export default function Home({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta property="og:title" content="Nile DAO" />
        <meta property="og:description" content="" />
        <meta property="og:image" content={Image} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://www.niledao.io/" />
      </Helmet>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
