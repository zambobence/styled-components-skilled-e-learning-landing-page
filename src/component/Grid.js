import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div``

function Grid({children}) {
  return (
    <StyledGrid>
        {children}
    </StyledGrid>
  )
}

export default Grid