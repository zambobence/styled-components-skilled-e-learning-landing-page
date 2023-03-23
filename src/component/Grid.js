import React from 'react'
import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;

  > div {
        grid-column: span 12;
    };
    @media (min-width: ${({theme}) => theme.breakpoints.tablet}) {
        > div {
            grid-column: span 6;
            }
    };
    @media (min-width: ${({theme}) => theme.breakpoints.desktop}) {
        > div {
            grid-column: span 4;
        }
    }};`

function Grid({children}) {
  return (
    <StyledGrid>
        {children}
    </StyledGrid>
  )
}

export default Grid