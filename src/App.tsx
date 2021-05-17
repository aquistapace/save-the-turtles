import React, { useState } from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeName, themes } from "./styles/Theme";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];
  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <Layout themeName={themeName} setThemeName={setThemeName} />
      </ThemeProvider>
    </>
  );
}

export default App;
