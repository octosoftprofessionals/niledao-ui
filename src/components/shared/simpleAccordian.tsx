import React, { useState } from 'react'
import { AccordianDataSchema } from '../../hooks'
import Section from './section'

interface Props {
  singleOpen?: boolean
  hoverToOpen?: boolean
  accordianData: AccordianDataSchema[]
}

export default function SimpleAccordian({
  singleOpen = false,
  hoverToOpen = false,
  accordianData,
}: Props): JSX.Element {
  const [data, setData] = useState(accordianData)
  return (
    <Section title="Frequently Asked Question">
      {data.map(faq => (
        <div key={faq.id}>
          <div
            className="group"
            onClick={() => {
              if (!singleOpen) faq.open = !faq.open
              else {
                data.forEach(f => {
                  if (f.id === faq.id) faq.open = true
                  else f.open = false
                })
              }
              setData([...data])
            }}
            onMouseEnter={() => {
              if (hoverToOpen) {
                if (!singleOpen) faq.open = !faq.open
                else {
                  data.forEach(f => {
                    if (f.id === faq.id) faq.open = true
                    else f.open = false
                  })
                }
                setData([...data])
              }
            }}
          >
            {faq.title}
            <svg
              className={faq.open ? 'rotate' : ''}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="arrow-alt-circle-down"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212
              140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9
              0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"
              ></path>
            </svg>
          </div>
          <div className={faq.open ? 'expand' : ''}>{faq.description}</div>

          <hr />
        </div>
      ))}
    </Section>
  )
}
