import React from 'react'
import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({justify}) => justify || 'start'};
  align-items: ${({align}) => align ||'flex-start'};
  `
function Flex({children, align, justify}) {
  return (
    <StyledFlex align={align} justify={justify}>
        {children}
    </StyledFlex>
  )
}

export default Flex