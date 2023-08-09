import React from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { Tatreal } from '../cms'

const HeaderContainer = styled.header`
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
  font-size: 1rem;
`
const A = styled.a`
  &:hover {
    color: lightgray;
  }
  color: white;
  text-decoration: none;
`

const Header = () => {
  const { header } = content as Tatreal
  return (
    <HeaderContainer>
      <Logo src={header.logo} alt="tatreal" />
      <Navigation>
        <A href="/">{header.nav.item1}</A>
        <A href="/">{header.nav.item2}</A>
        <A href="/">{header.nav.item3}</A>
      </Navigation>
      <Button>{header.button}</Button>
    </HeaderContainer>
  )
}

export default Header
