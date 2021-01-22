import React from 'react'
import { Layout } from '../components'
import tw, { styled } from 'twin.macro'
import { PictureAccordian, SimpleAccordian } from '../components/shared'
import { useFeatures, useFaqs } from '../hooks'

const Container = styled.div`
  ${tw`mx-4 lg:mx-56`}
`
export default function Home(): JSX.Element {
  return (
    <Layout>
      <Container>
        <div>
          <h1>Headding 1</h1>
          <h2>Headding 2</h2>
          <h3>Headding 3</h3>
          <h4>Headding 4</h4>
          <h5>Headding 5</h5>
          <h6>Headding 6</h6>
          <hr />
          <p>
            <strong>Paragraph: </strong> Non ipsum duis ut amet adipisicing cillum eu quis irure nisi sunt dolor. Aliqua
            duis labore Lorem laboris incididunt consectetur tempor ea sunt amet voluptate ea reprehenderit. Veniam
            eiusmod voluptate eu nisi irure. Irure dolor velit ullamco in aliquip sint consequat enim non duis. In dolor
            tempor in proident veniam non. Cillum nulla consequat excepteur cillum Lorem quis laborum ipsum quis irure
            dolor occaecat ea. Velit non voluptate cupidatat deserunt aliqua elit ullamco veniam occaecat culpa
            consectetur. Sunt consectetur veniam elit ullamco. Fugiat dolore labore deserunt nulla exercitation.
          </p>
        </div>
        <div tw="justify-between m-10 flex-wrap h-48 flex content-between place-content-around">
          <button className="button">Button Solid Primary</button>
          <button className="button secondry"> Solid Primary</button>
          <button className="button base"> Solid Base</button>
          <button className="button primaryBorder"> Border Primary</button>
          <button className="button secondryBorder"> Border Primary</button>
        </div>

        <SimpleAccordian singleOpen accordianData={useFaqs()} />
        <PictureAccordian singleOpen accordianData={useFeatures()} />
      </Container>
    </Layout>
  )
}
