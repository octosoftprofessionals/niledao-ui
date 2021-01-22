import { Link } from 'gatsby'
import React from 'react'
import tw, { styled } from 'twin.macro'

const FooterContainer = styled.div`
  ${tw` px-8 pt-8 pb-2 lg:px-20 divide-y bg-accent text-primary-dark m-0`}
  & p {
    ${tw`py-1 text-base`}
  }
`

export default function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <h2 tw="text-center py-24">hello@sanyam.com</h2>
      <div tw="flex py-5 flex-col lg:flex-row">
        <Link tw="m-auto mb-3" to="/privacy-policy">
          Privacy Policy
        </Link>
        <p tw="m-auto">@2020 by SanyamArya</p>
      </div>
    </FooterContainer>
  )
}
