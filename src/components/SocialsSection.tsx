import React from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'

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

const Twitter = styled.a`
  margin: 0.4rem 0rem 0.5rem 1.2rem;
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
        <Twitter href={main.social.twitter}>
          <svg
            width="3.5rem"
            height="3.5rem"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </Twitter>
      </SocialsImage>
    </SocialsContainer>
  )
}

export default SocialsSection
