import "./App.css";
import theme from "./Theme";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Template from "./components/Template";
import PeoplePage from "./pages/PeoplePage";
import BTech_Courses from "./pages/BTech_Courses";
import BtechPage from "./pages/BtechPage";
// import MTech_Courses from "./pages/MTech_Courses";
import Research from "./pages/ResearchPage";
import AdministrationPage from "./pages/AdministrationPage";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing the data
import AboutUs from "./data/AboutUs";
import ContactUs from "./data/ContactUs";
import Gallery from "./pages/Gallery";
import LabPage from "./pages/LabPage";
import Signal from "./pages/Signal";
import Power from "./pages/Power";
import Vlsi from "./pages/Vlsi";
import Publication from "./data/Publication";
import CoursePage from "./pages/CoursePage";
import FooterWithCounter from "./components/FooterWithCounter";
import NotFoundPage from "./pages/NotFoundPage";
import NewHeader from "./components/NewHeader";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          {/* <NewHeader /> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<Template Data={AboutUs} />} />
            <Route
              path="/publication"
              element={<Template Data={Publication} />}
            />
            <Route path="/research" element={<Research />} />
            <Route path="/labs" element={<LabPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route
              path="/people/btech"
              element={<BtechPage heading={"Btech"} />}
            />
            <Route
              path="/people/mtech"
              element={<BtechPage heading={"Mtech"} />}
            />
            <Route
              path="/people/staff"
              element={<BtechPage heading={"Staff"} />}
            />

            <Route
              path="/people/alumni"
              element={<BtechPage heading={"Alumni"} />}
            />
            <Route path="/people/PhD" element={<BtechPage heading={"PhD"} />} />
            <Route
              path="/people/faculty"
              element={<BtechPage heading={"Faculty"} />}
            />
            <Route path="/btech" element={<BTech_Courses />} />
            <Route path="/signals" element={<Signal />} />
            <Route path="/vlsi" element={<Vlsi />} />
            <Route path="/power" element={<Power />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/contact" element={<Template Data={ContactUs} />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/courses" element={<CoursePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

          <FooterWithCounter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
