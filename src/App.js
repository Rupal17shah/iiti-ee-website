import './App.css';
import theme from "./Theme";
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NotFoundPage from "./pages/NotFoundPage";
import Template from "./components/Template";
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing the data
import Research from "./data/Research";
import Lab from "./data/Lab";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUsPage/>} />
            <Route path='/research' element={<Template Data={Research} />} />
            <Route path='/labs' element={<Template Data={Lab}/>} />
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
