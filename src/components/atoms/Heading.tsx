import styled from 'styled-components';

export default styled.h1`
  font-size: 5em;
  text-align: center;
  color: ${({ theme }) => theme.accent};
  font-weight: ${({ theme }) => theme.headingFontWeight};
  font-family: ${({ theme }) => theme.headingFontFamily};
`;
