import styled from 'styled-components';

const Button = styled.button`
background-color: ${({bg})=> bg || "white"};
color: ${({color})=> color || "white"};
border: 1px solid #a4474f;
border-radius: 5px;
padding:  1rem 1.2rem;
font-size: 1.2rem;
margin-right: 1rem 0.5rem;
cursor:pointer;
&:hover{
  opacity: 0.8;
  transform: scale(0.97);
}
`;

export default Button;
    