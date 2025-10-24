import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./components/header";
import Footer from "./components/footer";
import Skills from "./pages/skills";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Write1 from "./pages/portfolio/projects/write-1";
import Write2 from "./pages/portfolio/projects/write-2";
import Write3 from "./pages/portfolio/projects/write-3";
import Write4 from "./pages/portfolio/projects/write-4";
import Write5 from "./pages/portfolio/projects/write-5";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/write1" element={<Write1 />} />
        <Route path="/write2" element={<Write2 />} />
        <Route path="/write3" element={<Write3 />} />
        <Route path="/write4" element={<Write4 />} />
        <Route path="/write5" element={<Write5 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
