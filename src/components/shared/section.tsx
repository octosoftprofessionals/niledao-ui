import React from 'react'
import tw, { styled } from 'twin.macro'

const PartSection = styled.section`
  ${tw`mt-20 lg:w-full`}
`
interface SectionProps {
  title?: string
  devider?: boolean
  children: any
  id?: string
}
export default function Section({ title, children, devider = false, id }: SectionProps): JSX.Element {
  return (
    <PartSection id={id}>
      {title && <h2 tw="text-center mb-2">{title}</h2>}
      {devider ? <hr /> : <br />}
      {children}
    </PartSection>
  )
}
