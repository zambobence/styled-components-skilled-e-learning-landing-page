import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
  `

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container