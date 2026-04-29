import { FaBlog } from "react-icons/fa";

function Blog() {
  const blogs = [
    {
      title: "Getting Started with React",
      desc: "Basics of React, components, and project setup using Vite.",
      date: "April 2026",
      tags: ["React", "Frontend"],
    },
    {
      title: "MERN Stack Overview",
      desc: "Understanding how MongoDB, Express, React, and Node work together.",
      date: "April 2026",
      tags: ["MERN", "Backend"],
    },
    {
      title: "Building Responsive UI with Tailwind",
      desc: "How to quickly design modern and responsive layouts.",
      date: "April 2026",
      tags: ["Tailwind", "UI"],
    },
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl mx-4 sm:mx-8 shadow-sm transition-colors duration-300">
      
      {/* Title with icon */}
      <h2 className="text-4xl font-extrabold text-center mb-16 flex justify-center items-center gap-3 text-slate-900 dark:text-white">
        <FaBlog className="text-indigo-500" /> Blog
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border-t-4 border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Date */}
            <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mb-3">{blog.date}</p>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-slate-100">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {blog.desc}
            </p>

            {/* Bottom Section */}
            <div className="flex justify-between items-center mt-auto">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;