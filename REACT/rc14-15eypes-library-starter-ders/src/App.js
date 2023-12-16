import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
// import { GlobalStyles } from "./styles/Global.styles";
import { theme } from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <GlobalStyles /> */}
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
