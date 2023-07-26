import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import content from '../../content/pages/home.yml'
import { HomePage } from '../cms'
import styled from 'styled-components'

const PageContainer = styled.main`
  background-color: #000020;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`
const Header = styled.header`
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
    </PageContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
