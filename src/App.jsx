import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "../src/Pages/Home.jsx"
import Contact from "../src/Pages/Contact.jsx"; // Ensure this path is correct
 // Try without the .jsx extension
  // Ensure this path is correct
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
