import React from 'react'
import { Home, FirstLand, SecondLand, ThirdLand, WaitList } from '../components'

export default function LandPage(): JSX.Element {
  return (
    <Home>
      <FirstLand />
      <SecondLand />
      <ThirdLand />
      <WaitList />
    </Home>
  )
}
