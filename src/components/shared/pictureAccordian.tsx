import React, { useState } from 'react'
import { AccordianDataSchema } from '../../hooks'
import Section from './section'
import Image from 'gatsby-image'

interface Props {
  singleOpen?: boolean
  hoverToOpen?: boolean
  accordianData: AccordianDataSchema[]
}

export default function PictureAccordian({
  singleOpen = false,
  hoverToOpen = false,
  accordianData,
}: Props): JSX.Element {
  const [data, setData] = useState(accordianData)
  return (
    <Section title="Photo Accordian">
      <div tw="block md:flex md:flex-row">
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
            </div>
            <div className={faq.open ? 'expand' : ''}>
              <span tw="flex-1 mx-2"> {faq.description}</span>
              <Image fluid={faq.featuredImage} tw="flex-1 m-2" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
