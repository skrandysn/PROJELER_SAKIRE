import styled, {css} from "styled-components";

const Links = styled.a`
text-decoration:none;
font-size:1.2 rem;
font-family:Verdana, Geneva, Tahoma, sans-serif;

&:hover{
  font-weight:700;
  cursor:pointer;
}

${({small})=> (small && css`
background-color: black;
color: #61dbfb;
padding: 0.7rem;
margin-top:1rem;
`)}


`;
export default Links;