import { useState } from 'react';
import { motion } from 'framer-motion';
import useDarkMode from '../../../hooks/useDarkMode';
import ThemeToggle from '../../ui/ThemeToggle';
import Logo from "../../../assets/logo.svg";

const Navbar = () => {

    const { isDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.img
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`md:w-40 md:h-40 w-28 h-28 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                        src={Logo}
                    />


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {sections.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item)}
                                className="capitalize transition-colors duration-300 cursor-pointer text-gray-600 hover:text-blue-500"
                            >
                                {item}
                            </button>
                        ))}
                        <ThemeToggle />
                    </div>


                    <div className="md:hidden flex items-center space-x-4">

                        <ThemeToggle />

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-800">
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-current mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            {sections.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="capitalize text-left text-gray-600 hover:text-blue-500 transition-colors duration-300"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
