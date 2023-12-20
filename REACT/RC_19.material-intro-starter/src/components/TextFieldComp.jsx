import {Container, TextField, Typography } from '@mui/material'
import React, {useState} from 'react';


const TextFieldComp = () => {
  const [error, setError] = useState(false);
  return (
    <Container>
      <Typography 
      color="secondary.light" m={4} align="center" variant="h4">text Field</Typography>

      <TextField 
      id="email" 
      label="email" 
      placeholder='Enter Your Email' 
      variant="outlined" 
      fullWidth margin="normal" 
      error={error} 
      helperText={error && "Incorrent Email"} 
      required />

      <TextField id="password" label="password" placeholder='Enter Password' fullWidth margin='normal' variant="filled" required />

      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  )
}

export default TextFieldComp
