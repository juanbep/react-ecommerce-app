import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import BrandLink from "./components/BrandLink";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {/*<Route path="/home" element={<Navbar />} />*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
