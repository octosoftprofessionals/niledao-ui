import React from 'react'
import { Home, FirstLand, SecondLand, ThirdLand, ContactUs } from '../components'

export default function LandPage(): JSX.Element {
  return (
    <Home>
      <FirstLand />
      <SecondLand />
      <ThirdLand />
      <ContactUs />
    </Home>
  )
}
