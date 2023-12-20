import { ThemeProvider, createTheme } from "@mui/material";
import AppBar from "../components/AppBar";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { deepOrange, red } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#bebe",
        light: "#dede",
      },
      secondary: {
        main: red[300],
      },
      error: {
        main: deepOrange[500],
      },
    },
    breakpoints: {
      values: {
        md: 1000,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <TypoButtons /> */}
      {/* <TextFieldComp /> */}
      <CardGrid />
      <AppBar />
    </ThemeProvider>
  );
};

export default Home;
