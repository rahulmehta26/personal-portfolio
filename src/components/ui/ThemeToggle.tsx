import { motion } from "motion/react"
import Moon from "../Icons/Moon"
import Sun from "../Icons/Sun"
import useDarkMode from "../../hooks/useDarkMode"

const ThemeToggle = () => {

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleDarkMode}
            className="p-2 rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-300 dark:border-gray-600 shadow-sm"
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            title={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {isDarkMode ? (
                    <Sun className="w-5 h-5 cursor-pointer" />
                ) : (
                    <Moon className="w-5 h-5 cursor-pointer fill:gray-600" />
                )}
            </motion.div>
        </motion.button>
    )
}

export default ThemeToggle