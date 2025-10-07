import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/black_logo.svg";
import Footer from "./components/Footer.jsx";
// import { LuPhoneCall } from "react-icons/lu";
import { BiSolidPhoneCall } from "react-icons/bi";

// Pages
import Home from "./components/Home.jsx";
import Approach from "./components/Approach.jsx";
import Work from "./components/OurWork.jsx";
// import RapidDiagnostic from "./components/RapidDiagnostic.jsx";
import Culture from "./components/Culture.jsx";
import Podcast from "./components/Podcastpage.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close mobile menu when clicking a link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-black text-white">
        {/* Navbar */}
        <nav className="sticky top-0 z-50 bg-black py-4 px-6 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-2">
           <Link to="/">

            <img src={logo} alt="Blackribbit Logo" className="h-12 md:h-16 w-auto m-3 rounded" />
           </Link>
          </div>

          <div className="flex justify-end items-center gap-10">
            {/* Desktop Nav links */}
            <ul className="hidden md:flex space-x-6 text-sm">
              
              <li><Link to="/approach" className="hover:text-gray-200">Approach</Link></li>
              <li><Link to="/work" className="hover:text-gray-200">Work</Link></li>
              <li><Link to="/rapid-diagnostic" className="hover:text-gray-200">Rapid Diagnostic</Link></li>
              <li><Link to="/culture" className="hover:text-gray-200">Culture</Link></li>
              <li><Link to="/podcast" className="hover:text-gray-200">Podcast</Link></li>
              <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
            </ul>

            <BiSolidPhoneCall className="md:hidden block text-3xl text-orange-400" />
            <button className="hidden md:block bg-orange-500 text-black font-semibold px-4 py-2 rounded hover:bg-orange-400">
              +1.713.714.6945
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none text-2xl"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black px-6 py-4 flex flex-col items-start space-y-4 border-b border-gray-800">
           
            <Link onClick={handleLinkClick} to="/approach" className="hover:text-gray-200 w-full">Approach</Link>
            <Link onClick={handleLinkClick} to="/work" className="hover:text-gray-200 w-full">Work</Link>
            <Link onClick={handleLinkClick} to="/rapid-diagnostic" className="hover:text-gray-200 w-full">Rapid Diagnostic</Link>
            <Link onClick={handleLinkClick} to="/culture" className="hover:text-gray-200 w-full">Culture</Link>
            <Link onClick={handleLinkClick} to="/podcast" className="hover:text-gray-200 w-full">Podcast</Link>
            <Link onClick={handleLinkClick} to="/contact" className="hover:text-gray-200 w-full">Contact</Link>
            <button className="bg-orange-500 text-black font-semibold px-4 py-2 rounded hover:bg-orange-400 w-full mt-2">
              +1.713.714.6945
            </button>
          </div>
        )}

        {/* Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/work" element={<Work />} />
            {/* <Route path="/rapid-diagnostic" element={<RapidDiagnostic />} /> */}
            <Route path="/culture" element={<Culture />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
