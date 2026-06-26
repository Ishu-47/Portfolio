import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-[120px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pt-24 pb-16 lg:px-10">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
          className="mb-5 text-lg text-sky-400"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
        >
          ISHU KUMAR
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25 }}
          className="mt-2 text-5xl font-extrabold text-slate-400 sm:text-7xl"
        >
          RAJORA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .35 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
        >
          I'm a Backend Engineer and Competitive Programmer passionate about
          building scalable backend systems with Java, Spring Boot, Redis,
          PostgreSQL, Docker and React.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .45 }}
          className="mt-10 flex flex-wrap gap-4"
        >

          <a
            href="#projects"
            className="group flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
          >
            View Projects
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>

          <a
            href="/resume.pdf"
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-500 hover:text-sky-400"
          >
            <Download size={18} />
            Resume
          </a>

        </motion.div>

        {/* Achievement Pills */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
          className="mt-14 flex flex-wrap gap-3"
        >

          <span className="rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
            Codeforces Expert
          </span>

          <span className="rounded-full border border-yellow-500/40 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
            LeetCode Knight
          </span>

          <span className="rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-300">
            CodeChef 4★
          </span>

          <span className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            ICPC Regionalist
          </span>

        </motion.div>

      </div>
    </section>
  );
}