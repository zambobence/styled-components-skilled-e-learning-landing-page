import React from 'react'
import styled from 'styled-components'
import Container from './Container'
import Button from './Button'
import logoDark from '../assets/logo-dark.svg'
import Logo from './Logo'
import Flex from './Flex'

const StyledHeader = styled.header`
    `
function Header({children}) {
  return (
    <StyledHeader>
            <Container>
                <nav>
                    <Flex align='center' justify='space-between'>
                        <Logo src={logoDark} alt="logo" />
                        <Button type='header'>Get Started</Button>
                    </Flex>
                </nav>
        </Container>
    </StyledHeader>
  )
}

export default Header