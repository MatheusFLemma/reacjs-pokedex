import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import HeaderTitle from "./components/HeaderTitle";
import PokemonCard from "./components/PokemonCard";

function App() {
  useEffect(() => {
    // AOS INITIATION
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <>
        <HeaderTitle>Pokedex</HeaderTitle>
        <PokemonCard />
      </>
    </ThemeProvider>
  );
}

export default App;
