import React from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { Tatreal } from '../cms'
import { StaticImage } from 'gatsby-plugin-image'

const PlatformsContainer = styled.div`
  padding: 3.75rem 0;
`
const ListenTo = styled.div`
  margin-bottom: 1.7rem;
  font-size: 1.3rem;
  color: #999;
  font-weight: 700;
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
  }
  @media (max-width: 768px) {
    gap: 2rem;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const PlatformLink = styled.a`
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
  max-width: 10rem;

  &:hover {
    filter: none;
  }
`

const PlatformsSection = () => {
  const { main } = content as Tatreal

  return (
    <PlatformsContainer>
      <ListenTo>LISTEN TATREAL ON</ListenTo>
      <ImageGrid>
        <PlatformLink href={main.music.spotify}>
          <StaticImage src="../images/spotify.png" alt="Spotify" />
        </PlatformLink>
        <PlatformLink href={main.music.itunes}>
          <StaticImage src="../images/itunes.png" alt="Apple music" />
        </PlatformLink>
        <PlatformLink href={main.music.bandcamp}>
          <StaticImage src="../images/bandcamp.png" alt="Bandcamp" />
        </PlatformLink>
        <PlatformLink href={main.music.deezer}>
          <StaticImage src="../images/deezer.png" alt="Deezer" />
        </PlatformLink>
        <PlatformLink href={main.music.youtube}>
          <StaticImage src="../images/youtube.png" alt="Youtube" />
        </PlatformLink>
        <PlatformLink href={main.music.soundcloud}>
          <StaticImage src="../images/soundcloud.png" alt="SoundCloud" />
        </PlatformLink>
      </ImageGrid>
    </PlatformsContainer>
  )
}

export default PlatformsSection
