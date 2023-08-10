import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PlatformsSection from '../components/PlatformsSection'
import SocialsSection from '../components/SocialsSection'
import GlobalFonts from '../fonts/fonts'

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
  padding: 0 4rem;
  flex: 1 1 auto;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <PageContainer>
        {/* <Header /> */}
        <Main>
          <PlatformsSection />
          <SocialsSection />
        </Main>
        <Footer />
      </PageContainer>

      <GlobalFonts />
    </>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Tatreal</title>
