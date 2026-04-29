import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden py-20">
      {/* Background glowing blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob dark:opacity-30"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 dark:opacity-30"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 dark:opacity-30"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="text-left space-y-8">
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold text-sm border border-indigo-100 dark:border-indigo-500/20 shadow-sm">
            🚀 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Tisha</span> 👋
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-300">
            MERN Stack Developer
          </h2>
          
          <p className="max-w-lg text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I craft responsive, high-performance web applications with clean code and modern aesthetics. Let's turn your ideas into digital reality.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links Mini */}
          <div className="flex gap-6 pt-6 text-slate-500 dark:text-slate-400">
             <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors text-2xl"><FaGithub /></a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors text-2xl"><FaLinkedin /></a>
             <a href="#contact" className="hover:text-indigo-500 transition-colors text-2xl"><FaEnvelope /></a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative justify-center lg:justify-end hidden md:flex">
          <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px]">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Actual Image container */}
            <div className="relative h-full w-full bg-white dark:bg-slate-800 rounded-full p-2 shadow-2xl border border-slate-100 dark:border-slate-700 z-10">
              <img 
                src="/tisha_photo.jpeg" 
                alt="Tisha" 
                className="rounded-full w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-4 -left-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-[bounce_3s_infinite]">
                <span className="text-3xl">💻</span>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Available For</p>
                  <p className="text-sm text-slate-900 dark:text-white font-bold">New Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;