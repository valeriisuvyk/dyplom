import React from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'

const PlatformsContainer = styled.div``

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

const ListenTo = styled.div`
  height: auto;
  width: 50%;
  margin: 3rem 0;
  font-size: 1.3rem;
  color: #999;
  font-family: 'Metropolis', sans-serif;
  font-weight: 700;
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
const PlatformsSection = () => {
  const { main } = content as HomePage

  return (
    <PlatformsContainer>
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
      </ImageGrid>{' '}
    </PlatformsContainer>
  )
}

export default PlatformsSection
