import React, { useState } from 'react'
import tw, { styled } from 'twin.macro'
import { AccordianDataSchema } from '../../hooks'
import Section from './section'
import Image from 'gatsby-image'

interface Props {
  singleOpen?: boolean
  hoverToOpen?: boolean
  accordianData: AccordianDataSchema[]
}

const Accord = styled.div`
  ${tw`m-0 sm:shadow bg-back-light pb-4`}
`
const Title = styled.h3`
  ${tw`text-xl px-2 text-primary-dark cursor-pointer sm:hover:px-4
  transition-all duration-300 ease-in-out`}
`
const Description = styled.p`
  ${tw`px-2 m-0 w-0 h-0 opacity-0 md:flex md:flex-row text-accent-dark
  transition-all duration-300 ease-in-out text-lg
 `}
  &.expand,
  &.expand > * {
    ${tw` w-auto h-auto `}
    animation: text-focus-in 0.2s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }
`
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
          <Accord key={faq.id}>
            <Title
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
            </Title>
            <Description className={faq.open ? 'expand' : ''}>
              <span tw="flex-1 mx-2"> {faq.description}</span>
              <Image fluid={faq.featuredImage} tw="flex-1 m-2" />
            </Description>
          </Accord>
        ))}
      </div>
    </Section>
  )
}
