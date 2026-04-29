import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Blog />
        <Contact />
      </main>
    </div>
  );
}

export default App;