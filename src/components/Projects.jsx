function Projects() {
  const projects = [
    {
      title: "Mehandi Booking Website",
      description:
        "Users can book mehndi services online. Solves manual booking problem with easy UI.",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
    },
    {
      title: "Freelance Platform",
      description:
        "Connects clients with freelancers. Includes authentication and project posting.",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "E-commerce UI",
      description:
        "Modern shopping UI with product listing and cart design.",
      tech: ["React", "Tailwind"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl mx-4 sm:mx-8 shadow-sm transition-colors duration-300">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 dark:text-white">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">
              {project.title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-3 py-1.5 rounded-full text-sm font-medium border border-indigo-100 dark:border-indigo-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;