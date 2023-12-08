import { Button, F1Button } from "./components/Button.styled.jsx";
import HeaderText from "./components/HeaderText.jsx";
import Links from "./components/Links.jsx";
import Sarmal from "./components/Sarmal.jsx";

const App = () => {
  return (
    <>
    <Sarmal bg="#bebe">
      <HeaderText bgRenk="#149ECA" renk="red">Styled Components</HeaderText>
      <Button>Send</Button>
      <Button primary>Send</Button>
      <F1Button react>Calis</F1Button>
      <F1Button>Daha Cok Calis</F1Button>
    </Sarmal>
    <Sarmal bg="#149ECA">
  <Links href="https://www.google.com"
    target="_blank">Google Web Site</Links>
    <Links small href="https://www.reactjs.com"
    target="_blank">ReactJS</Links>
    <Links href="https://www.npmjs.com"
    target="_blank">NPM</Links>
      

    </Sarmal>
    
    </>
  );
};

export default App;
