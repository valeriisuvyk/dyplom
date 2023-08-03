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
import twitterx from '../images/icons8-twitterx.svg'

const PageContainer = styled.div`
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

  padding: 1rem 4rem;

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
`

const Logo = styled.img`
  cursor: pointer;
  max-height: 10rem;
  max-width: 10rem;
`

const Button = styled.button`
  cursor: pointer;
  font-weight: bold;
  white-space: nowrap;
  padding: 1rem 1.8rem;
  border: none;
  border-radius: 1rem;
  background-color: lightgray;
  color: rgb(51, 51, 51);
`
const Main = styled.main`
  height: 200vh; //optional
  background-color: white;
  flex: 1 1 auto;

  padding: 5rem 0 4rem 4rem;
`

const PlatformsSection = styled.div``

const SocialsSection = styled.div``

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  max-width: 50rem;
  margin: 2rem auto 0;
  margin-top: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`
const SocialsImage = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.7rem;
  max-width: 50rem;
  margin: 2rem auto 0;
  margin-top: 2rem;
  margin-left: -1.6rem;
`

const Spotify = styled.img`
  width: 65%;
  height: auto;
  cursor: pointer;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`

const AppleMusic = styled.img`
  width: 65%;
  height: auto;
  cursor: pointer;
  margin: 0.5rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`
const Bandcamp = styled.img`
  width: 65%;
  height: auto;
  cursor: pointer;
  margin: 1rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`

const Deezer = styled.img`
  width: 65%;
  height: auto;
  cursor: pointer;
  margin: 0.7rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`

const Youtube = styled.img`
  width: 65%;
  height: auto;
  cursor: pointer;
  margin: 0.7rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`
const SoundCloud = styled.img`
  width: 50%;
  height: auto;
  cursor: pointer;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`

const Discord = styled.img`
  width: 95%;
  height: auto;
  cursor: pointer;
  margin: 1.3rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`
const Reddit = styled.img`
  width: 95%;
  height: auto;
  cursor: pointer;
  margin: 0.7rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`
const Instagram = styled.img`
  width: 95%;
  height: auto;
  cursor: pointer;
  margin: 1.8rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`

const Facebook = styled.img`
  width: 95%;
  height: auto;
  cursor: pointer;
  margin: 1.8rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
  }
`

const Twitter = styled.img`
  width: 35%;
  height: auto;
  cursor: pointer;
  margin: 1.2rem;
  display: block;
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: none;
    fill: blue;
  }
`

const ListenTo = styled.div`
  height: auto;
  width: 50%;
  margin: 3rem 0;
  font-size: 1.3rem;
  color: #999;
  font-family: 'Metropolis', sans-serif;
  font-weight: 700;
`

const Social = styled.div`
  height: auto;
  width: 80%;
  margin: 3rem 0;
  font-size: 1.3rem;
  color: #999;
  font-family: 'Metropolis', sans-serif;
  font-weight: 700;
`

const AboutMe = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`
const InfoAboutMe = styled.div`
  
`

// -------------------------------- //

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;

  background-color: rgb(51, 51, 51);
  padding: 2rem 4rem;
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
const InfoFooter = styled.span`
  color: rgb(136, 136, 136);
  font-weight: 450;
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
`

const Copyright = styled.p`
  color: rgb(136, 136, 136);
  font-weight: 450;
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 0.5rem;
`
// ------------------------------------------ //

const IndexPage: React.FC<PageProps> = () => {
  const { header, main } = content as HomePage
  return (
    <PageContainer>
      <Header>
        <Logo src={header.logo} alt="tatreal" />
        <Navigation>
          <A href="/">{header.nav.item1}</A>
          <A href="/">{header.nav.item2}</A>
          <A href="/">{header.nav.item3}</A>
        </Navigation>
        <Button>{header.button}</Button>
      </Header>
      <Main>
        <PlatformsSection>
          <ListenTo>LISTEN TATREAL ON</ListenTo>
          <ImageGrid>
            <a href={main.music.spotify}>
              <Spotify
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/spotify.svg"
                alt="Spotify"
              />
            </a>
            <a href={main.music.itunes}>
              <AppleMusic
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/apple.svg"
                alt="Apple music"
              />
            </a>
            <a href={main.music.bandcamp}>
              <Bandcamp
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/bandcamp.svg"
                alt="Bandcamp"
              />
            </a>
            <a href={main.music.deezer}>
              <Deezer
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/deezer.svg"
                alt="Deezer"
              />
            </a>
            <a href={main.music.youtube}>
              <Youtube
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/youtube.svg"
                alt="Youtube"
              />
            </a>
            <a href={main.music.soundcloud}>
              <SoundCloud
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/soundcloud.svg"
                alt="SoundCloud"
              />
            </a>
          </ImageGrid>
        </PlatformsSection>
        <SocialsSection>
          <Social>LETS GET SOCIAL</Social>
          <SocialsImage>
            <a href={main.social.discord}>
              <Discord
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/social/discord.svg"
                alt="Discord"
              />
            </a>
            <a href={main.social.reddit}>
              <Reddit
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/social/reddit.svg"
                alt="Reddit"
              />
            </a>
            <a href={main.social.instagram}>
              <Instagram
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/social/Instagram.svg"
                alt="Instagram"
              />
            </a>
            <a href={main.social.facebook}>
              <Facebook
                src="https://chillhop.com/wp-content/themes/chillhop/assets/images/social/facebook.png"
                alt="Facebook"
              />
            </a>
            <a href={main.social.twitter}>
              <Twitter 
              src={twitterx} 
              alt="Twitter" />
            </a>
          </SocialsImage>
        </SocialsSection>
        <AboutMe>
        <InfoAboutMe>
        </InfoAboutMe>
        </AboutMe>
      </Main>

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
      </Footer>
    </PageContainer>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Home Page</title>
