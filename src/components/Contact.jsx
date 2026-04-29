function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-slate-900 dark:text-white">Let's Connect</h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 space-y-6 transition-colors duration-300"
      >
        {/* 🔑 Replace with your key */}
        <input type="hidden" name="access_key" value="22aee160-7072-4ba4-a9f6-5449a100d8b8" />

        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all"
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-all resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-6 mt-12">
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-semibold text-lg transition-colors"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-semibold text-lg transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;