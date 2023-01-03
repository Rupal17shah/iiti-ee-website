import logo from './logo.svg';
import './App.css';
import AboutDepartment from './pages/AboutDepartment';
import Home from './pages/Home';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/department" element={<AboutDepartment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
