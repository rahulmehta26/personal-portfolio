import { useRef, useState } from "react"
import { motion } from "motion/react"
import { contactInfo } from "../../content/data"
import Mail from "../Icons/Mail"
import LinkedIn from "../Icons/LinkedIn"
import Github from "../Icons/Github"
import emailjs from "@emailjs/browser";
import { showToast } from "../../utils/showToast"

const Contact = () => {

    const [formData, setFormData] = useState({
        from_name: "",
        email: "",
        message: "",
    })

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {

            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current!,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_USER_ID
                }
            );

            showToast({
                type: 'success',
                message: `Email sent successfully: ${result.text}`
            })

            setFormData({
                from_name: "",
                email: "",
                message: ""
            });

        } catch (error: unknown) {

            const errMsg =
                error instanceof Error
                    ? error.message
                    : typeof error === 'string'
                        ? error
                        : "Unknown error";

            showToast({
                type: "error",
                message: `Error sending email: ${errMsg}`
            })
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
                    <motion.div
                        className="w-40 h-1 bg-blue-600 dark:bg-blue-400 mx-auto origin-center"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    />

                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <Mail className="w-6 h-6 fill-black dark:fill-white mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                                    <a
                                        href={`mailto:${contactInfo.email}`}
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        {contactInfo.email}
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-center">
                                <LinkedIn className="w-6 h-6 fill-black dark:fill-white mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white">LinkedIn</h4>
                                    <a
                                        href={contactInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Github className="w-6 h-6 fill-black dark:fill-white mr-4" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-white">GitHub</h4>
                                    <a
                                        href={contactInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        View Repositories
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Let's Connect</h3>
                            <div className="flex space-x-4">
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    href={contactInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                                >
                                    <LinkedIn className="w-7 h-7 fill-white" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    href={contactInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
                                >
                                    <Github className="w-7 h-7 fill-white" />
                                </motion.a>
                                <motion.a
                                    whileHover={{ y: -5 }}
                                    href={`mailto:${contactInfo.email}`}
                                    className="w-12 h-12 bg-red-600 dark:bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-700 dark:hover:bg-red-600 transition-colors duration-300"
                                >
                                    <Mail className="w-7 h-7 fill-white" />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="bg-gray-200 dark:bg-gray-800 p-8 rounded-xl shadow-md transition-colors duration-300"
                        >
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="from_name"
                                    name="from_name"
                                    value={formData.from_name}
                                    onChange={handleChange}
                                    className="w-full px-4 placeholder:text-neutral-800 dark:placeholder:text-neutral-100 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full placeholder:text-neutral-800 dark:placeholder:text-neutral-100 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="your.email@example.com"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full placeholder:text-neutral-800 dark:placeholder:text-neutral-100 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 cursor-pointer dark:bg-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact