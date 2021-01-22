import React from 'react'
import { Global } from '@emotion/react'
import Footer from './footer'
import tw, { styled, css } from 'twin.macro'
import Navigation from './navigation'

const Main = styled.main`
  ${tw`m-0 z-0`}
`
interface Props {
  children: JSX.Element | any
}
export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            ${tw`m-0 p-0 `}
          }
          * + * {
            margin-top: 0rem;
          }
          html,
          body {
            ${tw`m-0 w-screen h-screen p-0 text-accent-dark bg-back-light`}
            font-size:16px;
            font-family: Futura;
          }
          body::-webkit-scrollbar {
            display: none;
          }
          body: {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
          .avatar {
            ${tw`my-auto ml-auto block rounded-full`}
          }
          h1 {
            ${tw`text-5xl`}
          }
          h2 {
            ${tw`text-4xl`}
          }
          h3 {
            ${tw`text-3xl`}
          }
          h4 {
            ${tw`text-2xl`}
          }
          h5 {
            ${tw`text-xl font-semibold`}
          }
          h6 {
            ${tw`text-lg font-semibold`}
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            ${tw`my-4 tracking-wide`}
          }
          p {
            ${tw`text-lg`}
          }
          b,
          solid {
            ${tw`font-bold`}
          }
          li {
            margin-top: 0.25rem;
          }
          img {
            ${tw`p-0 m-0`}
          }
          .right-top {
            ${tw`absolute m-2 z-50 right-0`}
          }
          .right-bottom {
            ${tw`absolute m-2 z-50 right-0 bottom-0`}
          }
          hr {
            ${tw`h-0 border m-2 border-primary-dark`}
          }
          .button {
            ${tw`px-10 py-2 text-lg font-medium rounded-lg uppercase bg-primary
            transform sm:hover:scale-105 duration-200 shadow-md
            text-back-light relative overflow-hidden`}
            outline: none !important;

            &:after {
              ${tw`block absolute rounded-full opacity-50 bg-primary-dark`}
              content: '';
              left: 50%;
              top: 50%;
              width: 300px;
              height: 300px;
              margin-left: calc(-300px / 2);
              margin-top: calc(-300px / 2);

              transform: scale(0);
            }
            &:not(:active):after {
              animation: ripple 1s ease-out;
            }
            &:after {
              ${tw`invisible`}
            }
            &:focus:after {
              ${tw`visible`}
            }
          }

          @keyframes ripple {
            0% {
              transform: scale(0);
            }
            20% {
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1);
            }
          }

          .primary {
            ${tw`text-base bg-primary`}
          }
          .secondry {
            ${tw`text-back-light bg-accent`}
          }
          .base {
            ${tw`text-primary bg-back`}
          }
          .button.secondry:after {
            ${tw` bg-accent-dark`}
          }
          .primaryBorder {
            ${tw`border-3 text-primary-dark bg-back-light border-primary-dark`}
          }
          .secondryBorder {
            ${tw`border-3 text-accent-dark bg-back-light border-accent-dark`}
          }
          .button.secondryBorder:after {
            ${tw`bg-accent-dark`}
          }

          @keyframes text-focus-in {
            0% {
              -webkit-filter: blur(12px);
              filter: blur(12px);
              opacity: 0;
            }
            100% {
              -webkit-filter: blur(0px);
              filter: blur(0px);
              opacity: 1;
            }
          }
        `}
      />
      <Navigation />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
