'use client'
import { experiences } from "@/app/constant/experiences";
import { motion } from "framer-motion";

export default function Experiences() {

    return (
        <section className="container py-20">
                <h1 className="text-5xl md:text-7xl font-bold text-start md:text-center">Experiences</h1>
            <motion.ul className="my-5 md:my-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {experiences.map((experience, idx) => (
                    <motion.li
                        key={experience.companyName}
                        className={`bg-dark justify-center flex flex-col p-9 my-5 h-auto rounded-md shadow-2xl ${idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                        <div className="flex flex-col text-center md:flex-row justify-between">
                            <h1 className="text-2xl font-medium">{experience.companyName}</h1>
                            <span className="text-sm bg-darkest text-white rounded-md p-2">{experience.years}</span>
                        </div>
                            <p>Skills:</p>
                        <p className="text-sm text-light text-start">{experience.skills}</p>
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    )

}
