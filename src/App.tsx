import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Header/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import { ToastContainer } from "react-toastify";


function App() {

  const { isDarkMode } = useDarkMode();
  return (

    <>

      <ToastContainer />

      <div className={isDarkMode ? 'dark' : ''}>
        <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header>
            <Navbar />
          </Header>

          <main>

            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />

          </main>

          <Footer />

        </div>
      </div>

    </>
  );
}

export default App
