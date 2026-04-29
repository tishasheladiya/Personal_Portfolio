import { useState, useEffect } from "react";

function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 md:px-8 shadow-sm border-b border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md transition-colors duration-300">
      
      <h2 className="text-xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        MyPortfolio
      </h2>

      <div className="hidden md:flex gap-8 font-medium">
        <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
        <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
        <a href="#blog" className="hover:text-indigo-500 transition-colors">Blog</a>
        <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
      </div>

      {/* 🌙 Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-inner"
        aria-label="Toggle Dark Mode"
      >
        {dark ? "☀️" : "🌙"}
      </button>

    </nav>
  );
}

export default Navbar;