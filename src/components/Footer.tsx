import React from 'react'
import content from '../../content/pages/home.yml'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { Tatreal } from '../cms'

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  background-color: rgb(51, 51, 51);
  padding: 2rem 4rem;
  justify-content: space-between;

  @media (max-width: 50em) {
    padding: 2rem 1rem;
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`

const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  justify-self: end;

  @media (max-width: 50em) {
    justify-self: center;
    margin-top: 1rem;
  }
`

const A = styled.a`
  &:hover {
    color: lightgray;
  }
  color: white;
  text-decoration: none;
`

const Privacy = styled.div`
  display: flex;
  column-gap: 0.5rem;
  & span {
    &:hover {
      cursor: pointer;
      color: lightgray;
    }
  }

  @media (max-width: 50em) {
    justify-self: center;
    margin-bottom: 0.5rem;
  }
`

const TalkToUs = styled.div`
  display: flex;
  column-gap: 1rem;
  &:hover {
    color: lightgray;
  }
  font-weight: normal;
`

const InfoFooter = styled.span`
  color: rgb(136, 136, 136);
  font-weight: normal;
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
`

const Copyright = styled.p`
  color: rgb(136, 136, 136);
  font-weight: normal;
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 0.5rem;
`

const Footer = () => {
  const { main } = content as Tatreal

  return (
    <FooterContainer>
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
          <A href={main.music.youtube}>
            <FontAwesomeIcon size="lg" icon={faYoutube} />
          </A>
        </li>
        <li>
          <A href={main.social.twitter}>
            <FontAwesomeIcon size="lg" icon={faTwitter} />
          </A>
        </li>
        <li>
          <A href={main.social.facebook}>
            <FontAwesomeIcon size="lg" icon={faFacebook} />
          </A>
        </li>
        <li>
          <A href={main.social.instagram}>
            <FontAwesomeIcon size="lg" icon={faInstagram} />
          </A>
        </li>
        <li>
          <A href={main.music.soundcloud}>
            <FontAwesomeIcon size="lg" icon={faSoundcloud} />
          </A>
        </li>
        <li>
          <A href={main.music.itunes}>
            <FontAwesomeIcon size="lg" icon={faItunes} />
          </A>
        </li>
        <li>
          <A href={main.music.spotify}>
            <FontAwesomeIcon size="lg" icon={faSpotify} />
          </A>
        </li>
        <li>
          <A href={main.social.discord}>
            <FontAwesomeIcon icon={faDiscord} size="lg" />
          </A>
        </li>
      </Ul>
      <InfoFooter>info@my-site.com</InfoFooter>
      <Copyright>© 2012-2023 BY TATREAL MUSIC</Copyright>
    </FooterContainer>
  )
}

export default Footer
