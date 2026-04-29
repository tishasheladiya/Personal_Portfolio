import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 dark:text-white">Technical Skills</h2>

      <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">

        {/* Frontend */}
        <div className="p-8 rounded-3xl shadow-lg bg-white dark:bg-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <div className="w-16 h-16 mx-auto bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
            <FaReact className="text-blue-500 text-4xl drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Frontend</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">HTML, CSS, JavaScript, React, Tailwind</p>
        </div>

        {/* Backend */}
        <div className="p-8 rounded-3xl shadow-lg bg-white dark:bg-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <div className="w-16 h-16 mx-auto bg-emerald-50 dark:bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6">
            <FaNodeJs className="text-emerald-500 text-4xl drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Backend</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">Node.js, Express.js, REST API</p>
        </div>

        {/* Database */}
        <div className="p-8 rounded-3xl shadow-lg bg-white dark:bg-slate-800 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
          <div className="w-16 h-16 mx-auto bg-purple-50 dark:bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
            <FaDatabase className="text-purple-500 text-4xl drop-shadow-md" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">Database</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium">MongoDB, MySQL</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;