import styled, { ThemeProvider } from "styled-components";
// import Card from "./components/Card";
import GlobalStyles from "./global-styls";
import { useState } from "react";

const BaseTheme = {
  color: "#222",
  background: "#fff",
};

const DarkTheme = {
  color: "#fff",
  background: "#222",
};

const Container = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
`;

function App() {
  const [baseTheme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!baseTheme);
  };
  return (
    <div style={{ padding: "2rem" }}>
      <ThemeProvider theme={baseTheme ? BaseTheme : DarkTheme}>
        <GlobalStyles />
        <Container>
          <h1>hello world</h1>
          <button className="btn" onClick={toggleTheme}>
            toggle
          </button>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
