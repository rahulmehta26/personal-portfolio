import { motion } from "motion/react"
import { education, experiences, personalInfo } from "../../content/data"
import GraduationCap from "../Icons/GraduationCap"

const About = () => {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
                    <motion.div
                        className="w-30 h-1 bg-blue-600 dark:bg-blue-400 mx-auto origin-center"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />

                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">My Journey</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{personalInfo.bio}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            I specialize in building cross-platform mobile applications and modern web interfaces that provide
                            exceptional user experiences and optimal performance.
                        </p>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Experience Section */}
                        <div className="bg-gray-200 dark:bg-gray-700 p-8 rounded-xl transition-colors duration-300">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Experience</h3>
                            <div className="space-y-6">
                                {experiences.map((exp, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">{exp.title}</h4>
                                        <p className="text-blue-600 dark:text-blue-400">
                                            {exp.company} • {exp.period}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className="bg-gray-200 dark:bg-gray-700 p-8 rounded-xl transition-colors duration-300">
                            <div className="flex items-center mb-6">
                                <GraduationCap className="w-8 h-8 stroke-gray-800 dark:stroke-blue-400 mr-3" width={3} />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Education</h3>
                            </div>
                            <div className="space-y-4">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-2 border-blue-200 dark:border-blue-800 pl-4">
                                        <h4 className="font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                                        <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">
                                            {edu.period} • {edu.location} • CGPA: {edu.cgpa}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About