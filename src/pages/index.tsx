import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PlatformsSection from '../components/PlatformsSection'
import SocialsSection from '../components/SocialsSection'
import GlobalFonts from '../fonts'
import { RecentWorks } from '../components/RecentWorks'
import { ListenMusic } from '../components/ListenMusic'
import { AboutMe } from '../components/AboutMe'
import { ContactMe } from '../components/ContactMe'
import { animateScroll as scroll } from 'react-scroll'
import { ScrollToTopButtonProps } from '../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const PageContainer = styled.div`
  font-family: 'Metropolis', sans-serif;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  padding: 2rem 4rem 0 4rem;
  flex: 1 1 auto;
`

const ScrollToTopButton = styled.button<ScrollToTopButtonProps>`
  --button-hover-tint: 60%;

  position: fixed;
  bottom: 1.25rem; // 20px
  right: ${(props) => (props.show ? '1.25rem' : '-4.375rem')}; // 70p
  display: ${(props) => (props.show ? 'block' : 'none')};
  background-color: rgb(51, 51, 51);
  border: none;
  border-radius: 0%;
  width: 3.125rem;
  height: 3.125rem;
  font-size: 1.125rem;
  cursor: pointer;
  transition: right 0.3s, filter 0.3s;

  &:hover {
    right: ${(props) => (props.show ? '1.25rem' : '-4.375rem')};
    filter: brightness(var(--button-hover-tint));
  }
`

const ScrollToTopIcon = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const IndexPage: React.FC<PageProps> = () => {
  const [showScrollButton, setShowScrollButton] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const scrollPosition = window.scrollY
      const triggerHeight = (windowHeight * 100) / 100

      setShowScrollButton(scrollPosition > triggerHeight)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  return (
    <>
      <PageContainer>
        <Header />
        <Main>
          <RecentWorks />
          <ListenMusic />
          <PlatformsSection />
          <AboutMe />
          <SocialsSection />
          <ContactMe />
        </Main>
        <Footer />
        {showScrollButton && (
          <ScrollToTopButton show={showScrollButton} onClick={scrollToTop}>
            <ScrollToTopIcon>
              <FontAwesomeIcon icon={faArrowUp} />
            </ScrollToTopIcon>
          </ScrollToTopButton>
        )}
      </PageContainer>

      <GlobalFonts />
    </>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Tatreal</title>
