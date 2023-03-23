import React from 'react'
import styled from 'styled-components'
import LogoLight from '../assets/logo-light.svg'
import Logo from './Logo'
import Button from './Button'
import Container from './Container'
import Flex from './Flex'

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.heading};
    }`

function Footer() {
  return (
    <StyledFooter>
        <Container>
        <Flex align='center' justify='space-between'>
            <Logo src={LogoLight} />
            <Button type='footer'>Get Started</Button>
        </Flex>
        </Container>
    </StyledFooter>
  )
}

export default Footer