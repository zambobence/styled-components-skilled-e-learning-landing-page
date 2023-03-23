import React from 'react'
import Card from './Card'
import Container from './Container'
import AnimationIcon from '../assets/icon-animation.svg'
import BusinessIcon from '../assets/icon-business.svg'
import CryptoIcon from '../assets/icon-crypto.svg'
import DesignIcon from '../assets/icon-design.svg'
import PhotoIcon from '../assets/icon-photography.svg'
import styled from 'styled-components'
import TitleCard from './TitleCard'
import Grid from './Grid'
const StyledFeatures = styled.div``

function Features({children}) {
  return (
    <StyledFeatures>
    <Container>
        <Grid>
        <TitleCard
          title='Check out our most popular courses!'
        />
        <Card 
          title='Animatuion'
          description='Learn the latest animation techniques to create stunning motion design and captivate your audience.'
          link='Get Started'
          iconSrc={AnimationIcon}
        />
        <Card 
          title='Design'
          description='Create beautiful, usable interfaces to help shape the future of how the web looks.'
          link='Get Started'
          iconSrc={DesignIcon}
        />
        <Card 
          title='Photography'
          description='Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.'
          link='Get Started'
          iconSrc={PhotoIcon}
        />
        <Card 
          title='Crypto'
          description='All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.'
          link='Get Started'
          iconSrc={CryptoIcon}
        />
        <Card 
          title='Business'
          description='A step-by-step playbook to help you start, scale, and sustain your business without outside investment.'
          link='Get Started'
          iconSrc={BusinessIcon}
        />

        </Grid>
    </Container>
    </StyledFeatures>
  )
}

export default Features