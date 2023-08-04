import React from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'
// import twitterx from '../images/icons8-twitterx.svg'

const SocialsContainer = styled.div``

const SocialsImage = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.7rem;
  max-width: 50rem;
  margin: 2rem auto 0;
  margin-top: 2rem;
  margin-left: -1.6rem;
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

const Social = styled.div`
  height: auto;
  width: 80%;
  margin: 3rem 0;
  font-size: 1.3rem;
  color: #999;
  font-family: 'Metropolis', sans-serif;
  font-weight: 700;
`
const SocialsSection = () => {
  const { main } = content as HomePage

  return (
    <SocialsContainer>
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
          {/* <Twitter src={twitterx} alt="Twitter" /> */}
        </a>
      </SocialsImage>
    </SocialsContainer>
  )
}

export default SocialsSection
