import { createGlobalStyle } from 'styled-components'

import MetropolisRegularWoff from './Metropolis-Regular.woff'
import MetropolisRegularWoff2 from './Metropolis-Regular.woff2'
import MetropolisSemiBoldWoff from './Metropolis-SemiBold.woff'
import MetropolisSemiBoldWoff2 from './Metropolis-SemiBold.woff2'
import MetropolisBoldWoff from './Metropolis-Bold.woff'
import MetropolisBoldWoff2 from './Metropolis-Bold.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Metropolis';
    src: local('Metropolis'), url(${MetropolisRegularWoff2}) format('woff2'),
         url(${MetropolisRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Metropolis';
    src: local('Metropolis SemiBold'), url(${MetropolisSemiBoldWoff2}) format('woff2'),
         url(${MetropolisSemiBoldWoff}) format('woff');
    font-weight: 600; /* SemiBold */
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Metropolis';
    src: local('Metropolis Bold'), url(${MetropolisBoldWoff2}) format('woff2'),
         url(${MetropolisBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`

export default GlobalStyle
