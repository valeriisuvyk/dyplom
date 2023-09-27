import React, { useState } from 'react'
import styled from 'styled-components'
import content from '../../content/pages/home.yml'
import { Tatreal } from '../cms'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-scroll'

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

  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: lightgray;
    }
  }
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
const MobileMenuButton = styled.button``
const Header = () => {
  const { header } = content as Tatreal

  return (
    <HeaderContainer>
      <Logo src={header.logo} alt="tatreal" />
      {/* <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {' '}
        // TODO
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </MobileMenuButton> */}

      <Navigation>
        <Link to="recentworks" smooth={true} duration={500}>
          {header.nav.item1}
        </Link>
        <Link to="music" smooth={true} duration={500}>
          {header.nav.item2}
        </Link>
        <Link to="about" smooth={true} duration={500}>
          {header.nav.item3}
        </Link>
      </Navigation>
      <Button>
        <Link to="contactme" smooth={true} duration={500}>
          {header.button}
        </Link>
      </Button>
    </HeaderContainer>
  )
}

export default Header
