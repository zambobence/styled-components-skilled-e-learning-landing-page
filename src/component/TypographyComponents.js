import styled from "styled-components";

const StyledHeading = styled.h1`
  font-size: ${({ type }) => type === "h1" ? "2,5rem" : "1.25rem"};
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 1rem;  `;

const StyledParagraph = styled.p`
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.paragaraph};
    line-height: 1.6rem;
`

const Heading = ({children, type}) => {
    return (
        <StyledHeading type={type}>
            {children}
        </StyledHeading>
    )
}

const Paragraph = ({children}) => {
    return (
        <StyledParagraph>
            {children}
        </StyledParagraph>
    )
}

export { Heading, Paragraph }