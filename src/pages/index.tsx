import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PlatformsSection from '../components/PlatformsSection'
import SocialsSection from '../components/SocialsSection'

const PageContainer = styled.div`
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Metropolis', sans-serif;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  /* height: 200vh; //optional */
  background-color: white;
  flex: 1 1 auto;

  padding: 5rem 0 4rem 4rem;
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <PageContainer>
      <Header />
      <Main>
        <PlatformsSection />
        <SocialsSection />
      </Main>
      <Footer />
    </PageContainer>
  )
}

export default IndexPage
export const Head: HeadFC = () => <title>Tatreal</title>
