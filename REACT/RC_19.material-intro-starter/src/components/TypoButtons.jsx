import Container  from "@mui/material/Container";
//import Typography from "@mui/material/Typography";
import  {Box, Button, Stack, }  from "@mui/material"; //* bu kullanım performans acısından kötü


const TypoButtons = () => {
  return (
    <>
    {/* <Container>
<Typography variant="h1" component="p" align="center" mt={2} color="red">Mui Typo</Typography>
<Typography variant="body" component="h1" align="justify" mt={3} color={"blue"} sx={{backgroundColor:"yellow", color:"black", fontSize:"4rem"}}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure sequi dolorum veritatis recusandae! Maxime illo eos explicabo aliquid quos?
</Typography>

<Typography variant="overline" component={"h2"} align="center" mt={2} color="red" sx={{marginTop:"2rem", display:"inline-block"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
</Container> */}
<Container>
  <Box sx={{display:"flex", justifyContent:"center", marginTop:"1.5rem", gap:5,}}>
    <Button  color="error" variant="text">Text</Button>
    <Button color="warning" variant="contained">Contained</Button>
    <Button color="secondary" variant="outlined">Outlined</Button>
  </Box>

  <Stack
  direction={{ xs: 'column', sm: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  justifyContent="center"
  mt={5}
>
     <Button  color="error" variant="text">Text</Button>
    <Button color="warning" variant="contained">Contained</Button>
    <Button color="secondary" variant="outlined">Outlined</Button>
    <Button color="secondary" variant="outlined">Outlined</Button>
</Stack>

</Container>
    
  </>

  );
 
};

export default TypoButtons;
