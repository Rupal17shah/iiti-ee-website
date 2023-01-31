import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
