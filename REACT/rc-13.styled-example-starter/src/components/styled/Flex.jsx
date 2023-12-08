import styled from 'styled-components';

const Flex = styled.div`
display:flex;
justify-content: center;
align-items: center;
padding:1.5rem;
gap:1rem;

@media (max-width: 700px) {
    flex-direction:column;
    text-align:center;
  }
`;

export default Flex;
