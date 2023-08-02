import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import {
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram,
  faSoundcloud,
  faItunes,
  faSpotify,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'

const PageContainer = styled.main`
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Metropolis', sans-serif;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const Header = styled.header`
  background-color: rgb(51, 51, 51);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 0.2rem #ffffff1f;
`
const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 2rem;
  margin: 0 0.5rem;
  & a {
    color: #ffffff87;
    text-decoration: none;
    :hover {
      color: inherit;
    }
  }
`

const Logo = styled.img`
  cursor: pointer;
  max-height: 2rem;
  max-width: 2rem;
`
const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  padding: 1rem 1.8rem;
  border: none;
  border-radius: 3px;
  background-color: #00a6ff;
  color: white;
`
const Main = styled.main`
  background-color: rgb(162, 162, 162);
  flex: 1 1 auto;
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;

  background-color: rgb(51, 51, 51);
  padding: 3rem;
  justify-content: space-between;
`
const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  justify-self: end;
`

const A = styled.a`
  &:hover {
    color: lightgray;
  }
  color: white;
  text-decoration: none;
`
// const Icon = styled.i`
//   :before {
//     content: '\f167';
//     font-family: 'Font Awesome 5 Brands';
//     color: white;

//     width: 1rem;
//     height: 1rem;
//   }
// `

const Privacy = styled.div`
  display: flex;
  column-gap: 0.5rem;
  & span {
    &:hover {
      cursor: pointer;
      color: lightgray;
    }
  }
`
const TalkToUs = styled.div`
  display: flex;
  column-gap: 1rem;
  &:hover {
    color: lightgray;
  }
  font-weight: 450;
`
const Copyright = styled.p`
  color: rgb(136, 136, 136);
  font-weight: 450;
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1.5rem;
`
const IndexPage: React.FC<PageProps> = () => {
  const { header } = content as HomePage
  return (
    <PageContainer>
      <Header>
        <Logo src={header.logo} alt="tatreal" />
        <Navigation>
          <a href="/">{header.nav.item1}</a>
          <a href="/">{header.nav.item2}</a>
          <a href="/">{header.nav.item3}</a>
        </Navigation>
        <Button>{header.button}</Button>
      </Header>
      <Main></Main>
      <Footer>
        <Privacy>
          <TalkToUs>
            <FontAwesomeIcon icon={faComments} />
            <span>Talk to us</span>
          </TalkToUs>
          <span>Privacy Policy</span>
          <span>Term of service</span>
        </Privacy>
        <Ul>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faYoutube} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faTwitter} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faFacebook} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faInstagram} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faSoundcloud} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faItunes} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon size="lg" icon={faSpotify} />
            </A>
          </li>
          <li>
            <A href="http://youtube.com/user/chillhopdotcom">
              <FontAwesomeIcon icon={faDiscord} size="lg" />
            </A>
          </li>
        </Ul>
        <Copyright>© 2012-2023 TATREAL MUSIC</Copyright>
      </Footer>
    </PageContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
