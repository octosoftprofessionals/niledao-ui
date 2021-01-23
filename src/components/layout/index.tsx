import React from 'react'
import Footer from './footer'
import Navigation from './navigation'
import { ThemeProvider, createMuiTheme, makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { main } from './theme'
const theme = createMuiTheme(main)
interface Props {
  children: JSX.Element | any
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
  })
)
export default function Layout({ children }: Props): JSX.Element {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <div className={classes.toolbar} />
      <div className={classes.content}>
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
