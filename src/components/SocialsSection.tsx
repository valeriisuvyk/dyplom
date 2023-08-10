import React from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { Tatreal } from '../cms'
import { StaticImage } from 'gatsby-plugin-image'

const SocialsContainer = styled.div`
  padding: 3.75rem 0;
`
const Social = styled.div`
  margin-bottom: 1.7rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #999;
  @media (max-width: 768px) {
    text-align: center;
  }
`

const ImageGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
    justify-content: center;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const SocialMediaLink = styled.a`
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
  max-width: 10rem;
  &:hover {
    filter: none;
  }
`

const SocialsSection = () => {
  const { main } = content as Tatreal

  return (
    <SocialsContainer>
      <Social>LETS GET SOCIAL</Social>
      <ImageGrid>
        <SocialMediaLink href={main.social.discord}>
          <StaticImage src="../images/discord.png" alt="Discord" />
        </SocialMediaLink>
        <SocialMediaLink href={main.social.reddit}>
          <StaticImage src="../images/reddit.png" alt="Reddit" />
        </SocialMediaLink>
        <SocialMediaLink href={main.social.instagram}>
          <StaticImage src="../images/instagram.png" alt="Instagram" />
        </SocialMediaLink>
        <SocialMediaLink href={main.social.facebook}>
          <StaticImage src="../images/facebook-text-logo.png" alt="Facebook" />
        </SocialMediaLink>
        <a href={main.social.twitter}>
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
        </a>
      </ImageGrid>
    </SocialsContainer>
  )
}

export default SocialsSection
