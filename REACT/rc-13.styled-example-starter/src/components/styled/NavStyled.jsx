import styled from 'styled-components';

const NavStyled = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({theme})=>theme.colors.primary};
  
  @media (max-width: 700px) {
    flex-direction:column;
    text-align:center;
  }
`;

export default NavStyled;
