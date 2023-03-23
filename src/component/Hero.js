import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Button from './Button'
import { Heading } from './TypographyComponents'
import { Paragraph } from './TypographyComponents'
import HeroImg from '../assets/image-hero-mobile.webp'
import Img from './Img'

const StyledHero = styled.div`
 > div {
  display: flex;
  flex-flow: row wrap;

  > div {
    flex-basis: 100%;
    align-items: center;
  };

  @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
    justify-content: space-between;
    > div {
      flex-basis: 45%;
      align-items: flex-start;
    };
  }
  @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
    h1, p {
      width: 80%;
    }
  }

`
function Hero() {
  return (
    <StyledHero>
      <Container>
          <div>
            <Heading type='h1'>
            Maximize skill, minimize budget
            </Heading>
            <Paragraph>
            Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.
            </Paragraph>
            <Button type='hero'>Get Started</Button>
          </div>
        <Img src={HeroImg} alt="hero" /> 
        </Container>
    </StyledHero>
  )
}

export default Hero