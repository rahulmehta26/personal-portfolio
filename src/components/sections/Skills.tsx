import { skills } from "../../content/skills"
import { motion } from "motion/react"
import SkillButton from "../ui/SkillButton"

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">My Skills</h2>
                    <motion.div
                        className="w-30 h-1 bg-blue-600 dark:bg-blue-400 mx-auto origin-center"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />
                    <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
                        Technologies and frameworks I work with to build amazing applications
                    </p>
                </motion.div>

                <div className="flex flex-wrap gap-10">
                    {skills.map((skill, index) => (
                        <SkillButton key={skill.id} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills