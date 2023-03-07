import './App.css';
import theme from "./Theme";
import Footer from './components/Footer';
import Header from './components/Header/Header';
import HomePage from "./pages/HomePage";
import Template from "./components/Template";
import PeoplePage from "./pages/PeoplePage";
import Courses from "./pages/Courses";
import BTech_Courses from "./pages/BTech_Courses";
import MTech_Courses from "./pages/MTech_Courses";
import Research from "./pages/ResearchPage";
import Domain from './components/ResearchBody/Domain';
import AdministrationPage from './pages/AdministrationPage';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// importing the data
import Lab from "./data/Lab";
import AboutUs from "./data/AboutUs"
import ContactUs from './data/ContactUs';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Template Data={AboutUs} />} />
            <Route path="/research" element={<Research />} />
            <Route path="/labs" element={<Template Data={Lab} />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/btech" element={<BTech_Courses />} />
            <Route path="/courses/mtech" element={<MTech_Courses />} />
            <Route path="/signals" element={<Domain />} />
            <Route path="/vlsi" element={<Domain />} />
            <Route path="/power" element={<Domain />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/contact" element={<Template Data={ContactUs} />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
