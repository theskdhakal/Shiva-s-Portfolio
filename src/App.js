import "./App.css";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Footer } from "./Component/Footer";
import { Header } from "./Component/Header";
import { Hero } from "./Component/Hero";
import { Projects } from "./Component/Projects";
import { Skills } from "./Component/Skills";
import "./style.css";

import { Routes, Route } from "react-router-dom";
import { Layout } from "./Component/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about-me" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
