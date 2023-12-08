import  Image  from "./styled/Image";
import  Button  from "./styled/Button";
import React from 'react'
import Flex from "./styled/Flex";

const Header = () => {
  return (
    <Flex>
    <div>
      <h1>The IT Career of Your Dreams Starts Here!</h1>
        <p>
          Eypes is a leading international software Bootcamp. Join a micro class
          online with other trainees and learn coding skills with a
          highly-skilled instructor.
        </p>
        <Button bg="#A4474F">Start your New Carier</Button>
    </div>
  <Image src="./images/hero.jpg" />

    </Flex>
    
  )
}

export default Header