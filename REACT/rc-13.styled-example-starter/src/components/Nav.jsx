import React from 'react'
import  Button  from "./styled/Button";
import NavStyled from './styled/NavStyled';

const Nav = () => {
  return (
    <NavStyled >
      <div>
        <img src="./images/logo.png" alt="logo" />
      </div>
      <div>
         <Button color="#A4474F">Apply Courses</Button>
     <Button bg="#A4474F">Talk To Adviser</Button>
      </div>
     
    </NavStyled>
  )
}

export default Nav;