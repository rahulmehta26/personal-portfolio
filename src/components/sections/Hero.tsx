import { motion } from "motion/react";

const Hero = () => {

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="pt-16 min-h-screen flex items-center">
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                            I'm <span className="text-blue-600">Rahul Mehta</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
                            React.js & React Native Stack Specialist
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Passionate about creating scalable web applications with modern technologies. Experienced in React, React Native, and building end-to-end solutions.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("projects")}
                                className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                            >
                                View My Work
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection("contact")}
                                className="border-2 border-blue-600 cursor-pointer text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                            <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-full shadow-xl"></div>
                            <div className="absolute inset-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">

                                <img
                                    src="./src/assets/profile.jpg"
                                    className=" w-full h-full rounded-full "
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
