import "./App.css";
import { About } from "./Component/About";
import { Contact } from "./Component/Contact";
import { Footer } from "./Component/Footer";
import { Header } from "./Component/Header";
import { Hero } from "./Component/Hero";
import { Projects } from "./Component/Projects";
import { Skills } from "./Component/Skills";
import "./style.css";

function App() {
  return (
    <>
      {/* <!-- dark-mode-button  --> */}
      <input type="checkbox" id="darkmode" class="dark-mode-checkbox" />

      <div class="wrapper">
        <label for="darkmode">
          <i class="fa-solid fa-circle-half-stroke dark-mode-toggle"></i>
        </label>

        {/* <!-- navigation bar  --> */}
        <Header />

        {/* <!-- hero section  --> */}
        <Hero />

        {/* <!-- skill section  --> */}
        <Skills />

        {/* <!-- Project section  --> */}
        <Projects />

        {/* <!-- about me section  --> */}
        <About />

        {/* <!-- get in touch section  --> */}
        <Contact />

        {/* <!-- footer section  --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
