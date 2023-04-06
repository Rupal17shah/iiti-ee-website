import "./App.css";
import theme from "./Theme";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Template from "./components/Template";
import BTech_Courses from "./pages/BTech_Courses";
import PeoplePage from "./pages/PeoplePage";
import Research from "./pages/ResearchPage";
import AdministrationPage from "./pages/AdministrationPage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import LabPage from "./pages/LabPage";
import Signal from "./pages/Signal";
import Power from "./pages/Power";
import Vlsi from "./pages/Vlsi";
import Publication from "./data/Publication";
import CoursePage from "./pages/CoursePage";
import FooterWithCounter from "./components/FooterWithCounter";
import NotFoundPage from "./pages/NotFoundPage";
import BlackHeader from "./components/BlackHeader";
import AboutUsPage from "./pages/AboutUsPage";
import BooksPage from "./pages/BooksPage";
import StatsPage from "./pages/StatsPage";
import PaperPage from "./pages/PaperPage";
import ProgramPage from "./pages/ProgramPage";
import ContactPage from "./pages/ContactPage";

function App() {
  let location;
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={[<Header />, <HomePage />]} />
            <Route path="/about" element={[<BlackHeader />, <AboutUsPage />]} />
            <Route
              path="/publication"
              element={[<BlackHeader />, <Template Data={Publication} />]}
            />
            <Route path="/research" element={[<BlackHeader />, <Research />]} />
            <Route path="/labs" element={[<BlackHeader />, <LabPage />]} />
            {/* <Route path="/people" element={[<BlackHeader />, <PeoplePage />]} /> */}
            <Route
              path="/people/:program/:year"
              element={[<BlackHeader />, <PeoplePage />]}
            />
            <Route
              path="/people/:program"
              element={[<BlackHeader />, <PeoplePage />]}
            />
            <Route
              path="/btech"
              element={[<BlackHeader />, <BTech_Courses />]}
            />
            <Route path="/signals" element={[<BlackHeader />, <Signal />]} />
            <Route path="/vlsi" element={[<BlackHeader />, <Vlsi />]} />
            <Route path="/power" element={[<BlackHeader />, <Power />]} />
            <Route
              path="/administration"
              element={[<BlackHeader />, <AdministrationPage />]}
            />
            <Route
              path="/contact"
              element={[<BlackHeader />, <ContactPage />]}
            />
            <Route path="/gallery" element={[<BlackHeader />, <Gallery />]} />
            <Route
              path="/courses"
              element={[<BlackHeader />, <CoursePage />]}
            />
            <Route
              path="/achievements/books"
              element={[<BlackHeader />, <BooksPage />]}
            />
            <Route
              path="/research/paper/:year"
              element={[<BlackHeader />, <PaperPage />]}
            />
            <Route
              path="/stats/:params"
              element={[<BlackHeader />, <StatsPage />]}
            />
            <Route
              path="/courses/:program"
              element={[<BlackHeader />, <CoursePage />]}
            />
            <Route
              path="/research/programs"
              element={[<BlackHeader />, <ProgramPage />]}
            />
            <Route path="*" element={[<BlackHeader />, <NotFoundPage />]} />
          </Routes>
          <FooterWithCounter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
