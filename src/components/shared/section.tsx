import React from 'react'
interface SectionProps {
  title?: string
  devider?: boolean
  children: any
  id?: string
}
export default function Section({ title, children, devider = false, id }: SectionProps): JSX.Element {
  return (
    <div id={id}>
      {title && <h2 tw="text-center mb-2">{title}</h2>}
      {devider ? <hr /> : <br />}
      {children}
    </div>
  )
}
