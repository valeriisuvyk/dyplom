import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'
import styled from 'styled-components'

const PageContainer = styled.main`
  color: white;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Header = styled.header`
  background-color: gray;
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
  margin: 2rem auto 0;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  max-width: 50rem;
  margin: 2rem auto 0;
  margin-top: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Spotify = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
  display: block;
  filter: grayscale(100%); /* Добавили серый цвет по умолчанию */
  transition: filter 0.3s ease-in-out; /* Добавили плавное изменение стиля */

  &:hover {
    filter: none; /* Возвращаем изначальный цвет при наведении */
  }
`

const AppleMusic = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
  margin: 0.5rem;
  display: block;
  filter: grayscale(100%); /* Добавили серый цвет по умолчанию */
  transition: filter 0.3s ease-in-out; /* Добавили плавное изменение стиля */

  &:hover {
    filter: none; /* Возвращаем изначальный цвет при наведении */
  }
`
const Bandcamp = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
  margin: 1rem;
  display: block;
  filter: grayscale(100%); /* Добавили серый цвет по умолчанию */
  transition: filter 0.3s ease-in-out; /* Добавили плавное изменение стиля */

  &:hover {
    filter: none; /* Возвращаем изначальный цвет при наведении */
  }
`

const Deezer = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
  margin: 0.7rem;
  display: block;
  filter: grayscale(100%); /* Добавили серый цвет по умолчанию */
  transition: filter 0.3s ease-in-out; /* Добавили плавное изменение стиля */

  &:hover {
    filter: none; /* Возвращаем изначальный цвет при наведении */
  }
`

const Youtube = styled.img`
  width: 80%;
  height: auto;
  cursor: pointer;
  margin: 0.7rem;
  display: block;
  filter: grayscale(100%); /* Добавили серый цвет по умолчанию */
  transition: filter 0.3s ease-in-out; /* Добавили плавное изменение стиля */

  &:hover {
    filter: none; /* Возвращаем изначальный цвет при наведении */
  }
`
const SoundCloud = styled.img`
  width: 50%;
  height: auto;
  cursor: pointer;
  display: block;
  filter: grayscale(100%); /* Добавили серый цвет по умолчанию */
  transition: filter 0.3s ease-in-out; /* Добавили плавное изменение стиля */

  &:hover {
    filter: none; /* Возвращаем изначальный цвет при наведении */
  }
`
// -------------------------------- //

const IndexPage: React.FC<PageProps> = () => {
  const { header, main } = content as HomePage
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
      <Main>
        <ImageGrid>
          <a href={main.spotify}>
            <Spotify
              src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/spotify.svg"
              alt="Spotify"
            />
          </a>
          <a href={main.applemusic}>
            <AppleMusic
              src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/apple.svg"
              alt="Apple music"
            />
          </a>
          <a href={main.bandcamp}>
            <Bandcamp
              src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/bandcamp.svg"
              alt="Bandcamp"
            />
          </a>
          <a href={main.deezer}>
            <Deezer
              src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/deezer.svg"
              alt="Deezer"
            />
          </a>
          <a href={main.youtube}>
            <Youtube
              src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/youtube.svg"
              alt="Youtube"
            />
          </a>
          <a href={main.soundcloud}>
            <SoundCloud
              src="https://chillhop.com/wp-content/themes/chillhop/assets/images/streams/soundcloud.svg"
              alt="SoundCloud"
            />
          </a>
        </ImageGrid>
      </Main>
    </PageContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
