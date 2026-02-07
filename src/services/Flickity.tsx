import React from 'react'
import Slider from 'react-slick'
import { StaticImage } from 'gatsby-plugin-image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import homeData from '../../content/pages/home.yml'

const StyledPrevArrow = styled.button`
  position: absolute;
  top: 50%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transform: translateY(-50%);
  border: none;
  color: #333;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:before {
    font-size: 45px;
  }
`

const StyledNextArrow = styled.button`
  position: absolute;
  top: 50%;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transform: translateY(-50%);
  border: none;
  color: #333;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;

  &:before {
    font-size: 45px;
  }
`
const SliderContainer = styled.div`
  .slick-slider {
    cursor: grab; // Изменить курсор при наведении на фон слайдера
  }
`

interface SlideProps {
  text?: string
  longText?: string
  backgroundImage: string
}

const SlideContainer = styled.div`
  height: 400px;
  position: relative;
  background-size: cover;
  background-position: center;
  .slick-slider {
    cursor: grab; // Изменить курсор при наведении на фон слайдера
  }
`

const SlideText = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 20px;
  font-size: 18px;
  left: 0;
  right: 0;
  line-height: 28px;
  padding: 20px;
  color: white;
  text-align: center;
  max-width: 30%;
  margin: 0 auto;
`

const Slide: React.FC<SlideProps> = ({ text, longText, backgroundImage }) => {
  const slideBackground = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <SlideContainer style={slideBackground}>
      <StaticImage
        src={backgroundImage}
        alt={''}
        layout="fullWidth"
        placeholder="blurred"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <SlideText>
        {text && <h2>{text}</h2>}
        {longText && <p>{longText}</p>}
      </SlideText>
    </SlideContainer>
  )
}

const aboutme = homeData.main.aboutme || []

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <StyledPrevArrow />,
    nextArrow: <StyledNextArrow />,
  }

  return (
    <SliderContainer>
      <Slider {...settings}>
        {aboutme.map((slide: SlideProps, index: number) => (
          <Slide key={index} {...slide} />
        ))}
      </Slider>
    </SliderContainer>
  )
}

export default SliderComponent
