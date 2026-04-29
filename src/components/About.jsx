function About() { 
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-slate-900 rounded-3xl mx-4 sm:mx-8 shadow-sm transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 dark:text-white">About Me</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 🖼 Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src="/Tisha_Sheladiya.png"  // 👉 replace with your image
              alt="Profile"
              className="relative w-72 h-72 object-cover rounded-3xl shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10"
            />
          </div>
        </div>

        {/* 📄 Right Side Content */}
        <div className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed space-y-6">
          <p>
            I am a <span className="font-semibold text-indigo-500 dark:text-indigo-400">MERN Stack Developer</span> with practical experience in building
            responsive and scalable web applications. I completed my internship
            at La Minds, where I worked on academic projects and improved my
            development skills.
          </p>

          <p>
            I have built projects using HTML, CSS, PHP, MySQL as well as modern
            technologies like React, Node.js, and MongoDB.
          </p>

          <p>
            I am eager to start my career as a developer and contribute to
            real-world applications while continuously learning and growing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;