import React from 'react'
interface SectionProps {
  title?: string
  divider?: boolean
  children: any
  id?: string
}
export default function Section({ title, children, divider = false, id }: SectionProps): JSX.Element {
  return (
    <div id={id}>
      {title && <h2 tw="text-center mb-2">{title}</h2>}
      {divider ? <hr /> : <br />}
      {children}
    </div>
  )
}
