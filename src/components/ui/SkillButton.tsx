import { motion } from "motion/react"
import type { SkillProps } from '../../content/skills'

interface SkillButtonProps {
    skill: SkillProps
    index: number
}

const SkillButton = ({ skill, index }: SkillButtonProps) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group cursor-pointer"
        >
            <div className="flex flex-col items-center space-y-3">
                <div className="px-6 py-3 flex items-center gap-x-3 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
                    <skill.Icon className="w-6 h-6 fill-black dark:fill-white" />
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">{skill.name}</h3>
                </div>

            </div>
        </motion.div>
    )
}

export default SkillButton