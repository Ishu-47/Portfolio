import feed1 from "../../assets/images/aurora/feed-1.png";
import feed2 from "../../assets/images/aurora/feed-2.png";
import feed3 from "../../assets/images/aurora/feed-3.png";
import login from "../../assets/images/aurora/login.png";
import profile from "../../assets/images/aurora/profile.png";
import chat from "../../assets/images/aurora/chat.png";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Redis",
    "Docker",
    "WebSockets",
    "JWT",
    "Cloudinary",
];

const features = [
    "JWT Authentication",
    "Real-time Messaging",
    "Real-time Notifications",
    "Infinite Feed",
    "Redis Cache",
    "Docker Deployment",
    "Cloudinary Integration",
    "Responsive UI",
];

export default function Aurora() {
    return (
        <section
            id="projects"
            className="bg-slate-950 py-32"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                >

                    <p className="font-medium uppercase tracking-[0.25em] text-sky-400">
                        Featured Project
                    </p>

                    <h2 className="mt-4 font-['Sora'] text-5xl font-bold text-white">
                        Aurora
                    </h2>

                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        A production-ready social media platform built with
                        Java, Spring Boot and React featuring authentication,
                        real-time messaging, notifications, Redis caching,
                        Docker deployment and Cloudinary media management.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        <a
                            href="https://aurora-seven-orpin.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-xl bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
                        >
                            Live Demo
                        </a>

                        <a
                            href="https://github.com/Ishu-47/Aurora"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 font-semibold text-slate-200 transition hover:border-sky-500"
                        >
                            GitHub

                            <ArrowUpRight size={18} />
                        </a>

                    </div>

                </motion.div>

                {/* Hero Image */}

                <motion.img
                    initial={{ opacity: 0, scale: .95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    src={feed1}
                    alt="Aurora"
                    className="mt-16 rounded-3xl border border-white/10 shadow-2xl"
                />

                {/* Gallery */}

                <div className="mt-10 grid gap-6 md:grid-cols-3">

                    {[feed2, feed3, login, profile, chat].map((image) => (
                        <img
                            key={image}
                            src={image}
                            className="rounded-2xl border border-white/10 transition duration-300 hover:scale-[1.03]"
                        />
                    ))}

                </div>

                {/* Features */}

                <div className="mt-20 grid gap-16 lg:grid-cols-2">

                    <div>

                        <h3 className="mb-8 text-2xl font-bold text-white">
                            Engineering Highlights
                        </h3>

                        <div className="grid gap-4">

                            {features.map(feature => (

                                <div
                                    key={feature}
                                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
                                >
                                    ✓ {feature}
                                </div>

                            ))}

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-8 text-2xl font-bold text-white">
                            Tech Stack
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="rounded-full border border-sky-500/30 bg-sky-500/10 px-5 py-2 text-sky-300"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}