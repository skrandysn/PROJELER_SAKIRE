import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter';
//  import { GlobalStyle } from './styles/Global.styles';
import { theme } from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
         {/* <GlobalStyle/>  */}
         <AppRouter/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
