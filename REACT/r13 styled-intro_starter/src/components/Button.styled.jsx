import styled from "styled-components";

export const Button = styled.button`
/* background-color:hotpink;
color: white; */
background-color:${(props)=> (props.x ? "white" : "blue")};
color:${({primary}) => (primary ? "hotpink" : "white")};
width: 8 rem;
padding: 1rem 2rem;
border-radius: 1rem;
border: 2px solid hotpink;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size:1.1rem;

&:hover{
  transform: scale(0.98);
  cursor: pointer;
}
`;

export const F1Button =styled(Button)`
background-color: ${({react})=> (react ? "red" : "white")} ;
color:${({react})=> (react ? "white" : "red")} ;
border-color: ${({react})=> react || "red"};
`