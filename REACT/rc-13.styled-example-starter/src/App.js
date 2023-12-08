import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Header from "./components/Header";
import  Container  from "./components/styled/Container";
import { GlobalStyles } from "./components/styled/GlobalStyles";




const App = () => {
  const styles = {
    colors: {
      primary: "pink",
      secondary: "#c4f5sa",
    },
    margins: {},

    paddings: {},
    breakpoints: { xs: "300px", sm: "500px", md: "700px" },
  };

  return (
    <>
    <ThemeProvider theme={styles}>
       <Container>
      <GlobalStyles/>
      <Nav/>
      <Header/>

    </Container>
    </ThemeProvider>
   
    
     
    </>
  );
};

export default App;
