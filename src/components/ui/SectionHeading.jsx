import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left", }) {
    const alignment = align === "center" ? "text-center mx-auto" : "text-left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className={`mb-14 max-w-3xl ${alignment}`}
        >
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-['Sora'] text-4xl font-bold tracking-tight text-white md:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-lg leading-8 text-slate-400">
                    {description}
                </p>
            )}
        </motion.div>
    );
}