import './App.css';
import Home from './pages/HomePage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#9D0455",
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about/department" element={<AboutDepartment />} /> */}
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
