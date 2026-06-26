import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolio } from "../../data/portfolio";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-slate-950"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0ea5e920,transparent_45%)]" />

            <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[140px]" />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col px-6 pt-28 lg:px-10">

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5 }}
                    className="mb-5 text-base font-medium text-sky-400"
                >
                    Building scalable software.
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .1 }}
                    className="max-w-5xl font-['Sora'] text-5xl font-bold leading-tight text-white sm:text-7xl"
                >
                    {portfolio.personal.fullName}
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .2 }}
                    className="mt-4 max-w-4xl font-['Sora'] text-3xl font-semibold leading-tight text-slate-400 sm:text-5xl"
                >
                    Full-Stack Engineer &
                    <br />
                    Competitive Programmer.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .35 }}
                    className="mt-8 max-w-2xl text-lg leading-8 text-slate-400"
                >
                    I build production-ready applications using Java,
                    Spring Boot, React, PostgreSQL, Redis, Docker and
                    WebSockets, while enjoying competitive programming
                    and solving challenging algorithmic problems.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .45 }}
                    className="mt-12 flex flex-wrap gap-5"
                >
                    <a
                        href="https://aurora-seven-orpin.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-4 font-semibold transition hover:bg-sky-400"
                    >
                        Explore Aurora

                        <ArrowRight
                            size={18}
                            className="transition group-hover:translate-x-1"
                        />
                    </a>

                    <a
                        href={portfolio.personal.resume}
                        className="flex items-center gap-2 rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-200 transition hover:border-sky-500 hover:text-sky-400"
                    >
                        <Download size={18} />

                        Resume
                    </a>
                </motion.div>

                {/* Stats */}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: .7 }}
                    className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4"
                >
                    <Stat
                        number="1683"
                        label="Codeforces"
                    />

                    <Stat
                        number="2088"
                        label="LeetCode"
                    />

                    <Stat
                        number="4★"
                        label="CodeChef"
                    />

                    <Stat
                        number="2025"
                        label="ICPC Regionalist"
                    />
                </motion.div>

            </div>
        </section>
    );
}

function Stat({ number, label }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-3xl font-bold text-white">
                {number}
            </h3>

            <p className="mt-2 text-slate-400">
                {label}
            </p>
        </div>
    );
}