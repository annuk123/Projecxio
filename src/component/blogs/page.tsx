"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "../navbar/page";

export default function Blog() {
  return (

    <section className="max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 py-16">
       <Navbar />
<motion.h2
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
  className="text-4xl sm:text-5xl font-extrabold text-center mb-10 drop-shadow-md flex justify-center items-center gap-3 py-13" 
>
  <span className="text-5xl animate-wiggle">📝</span>
  <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
    My Blogs
  </span>
</motion.h2>



      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {/* Blog Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/java.jpeg"
            alt="Blog Post 1"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              History of Java Programming Language
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Java is a high-level, object-oriented programming language. It is designed to minimize implementation dependencies.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/history-of-java-programming-language"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/javascript.webp"
            alt="Blog Post 2"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              The History of Javascript
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            The article is about the history of JavaScript. JavaScript is a versatile, high-level programming language commonly used in web development to add interactivity to websites.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/the-history-of-javascript"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/javascript1.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              JavaScript Data Types
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            As we know JavaScript is a versatile Dynamically typed language. In JavaScript, data types are divided into two main categories: primitive types and non-primitive types (objects). 
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/javascript-data-types"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 4 */}

        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/control.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Control Structure in JavaScript
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Control structures in JavaScript are fundamental building blocks that control the flow of execution in a program. They include conditionals, loops, and error-handling mechanisms.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/control-structure-in-javascripts"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>


        {/* Blog Card 5 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/function.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Functions in JavaScript
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Functions are nothing but one of the core building blocks in JavaScript. They are reusable blocks of code that perform a specific task and can be called multiple times throughout your program.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/functions-in-javascript"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 6 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/linear.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Linear Search in Java (Part-1)
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Linear search, also known as sequential search, is a simple searching algorithm used to find a specific element in a list or array. 
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/all-about-linear-search-in-java-part-1"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 7 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/linear2.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Linear Search in Java (Part 2)
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Linear Search in more depth Such as Implementation Questions, Application Questions, Optimization and Analysis Questions, Theoretical Questions, Code Tracing and Debugging Questions.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/all-about-linear-search-in-java-part-2"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 8 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/array.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Array in Javascript
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Arrays are nothing but a collection of elements that can be accessed by index. In JavaScript, arrays are dynamic, meaning they can grow and shrink in size and hold any type of data 
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/array-in-javascript"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 9 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/json.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              What is JSON and JSON.stringify() method
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            JSON (JavaScript Object Notation) is a lightweight, easy-to-read format for data interchange. It uses a syntax similar to JavaScript objects and arrays and is widely supported across different programming languages.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/what-is-json-and-what-is-the-jsonstringify-method"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 10 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/docker.webp"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              All About Docker for absolute beginner
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Docker is a tool that helps you package your web application (along with everything it needs to run, like libraries, dependencies, and configurations) into something called a container.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/all-about-docker-for-absolute-beginner"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 11 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/arch.webp"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Architecture of Docker
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Docker&apos;s architecture is fascinating and foundational for understanding how it operates. At a high level, Docker follows a client-server architecture, where the client communicates with the Docker daemon to build, run, and manage containers.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/architecture-of-docker"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 12 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/network.jpeg"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Computer Networking Systems
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            A computer network is a group of computers and other devices (like phones, routers) connected to each other, allowing them to communicate and share data. The Internet is the largest example of a network.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/dive-deeper-into-computer-networking-systems-part-1"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 13 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/next.jpeg"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
             What makes NextJS projects different from simple ReactJS project 
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
             Next.js provides a lightweight solution for building dynamic and static web applications, leveraging React’s capabilities. Its integration with Babel and Webpack offers an efficient out-of-the-box solution for server-side rendering of React components.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/what-makes-nextjs-projects-different-from-simple-reactjs-project"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 14 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/next1.webp"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Difference between the traditional pages directory and the src/app directory in Next.js?
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            The current stable version of Next.js is Next.js 15, which was officially released in late 2024. In Next.js, the introduction of the src/app directory marks a shift from the traditional pages directory, bringing new features and concepts. 
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/what-is-the-difference-between-the-traditional-pages-directory-and-the-srcapp-directory-in-nextjs"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

       {/* Blog Card 15 */}
       <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/tailwind.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Debugging Tailwind CSS in My TypeScript Next.js Project
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            When building a TypeScript-based Next.js project, I encountered a frustrating issue: Tailwind CSS wasn’t working. I spent three days trying to debug the problem, only to discover a simple misconfiguration.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/debugging-tailwind-css-in-my-typescript-nextjs-project-lessons-from-a-3-day-chase"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 16 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/npm.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Added Packages, Audits, and Funding Requests
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Auditing is an essential part of modern software development that ensures the security and reliability of the third-party code you depend on. Withnpm audit, you can identify vulnerabilities in your dependencies.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/understanding-npm-install-messages-added-packages-audits-and-funding-requests-explained"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 17 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/nexts.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Unlocking the Secrets of the .next Folder in Next.js
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            The .next folder is an auto-generated directory that serves as the backbone of Next.js&apos;s build and runtime processes. It is created whenever you start the development server (npm run dev) or build your application for production (npm run build).
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/unlocking-the-secrets-of-the-next-folder-in-nextjs"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 18 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/type.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Understanding the Difference Between .ts and .tsx
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            .ts is used for TypeScript files that do not contain JSX (e.g., utility functions, type definitions, backend logic). .tsx is used for TypeScript files that include JSX syntax, typically when working with React components, where JSX is mixed with TypeScript code.
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/understanding-the-difference-between-ts-and-tsx-in-typescript-when-to-use-each"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Blog Card 19 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all transform hover:shadow-2xl"
        >
          <motion.img
            src="/assets/block.png"
            alt="Blog Post 3"
             className="w-full h-48 object-cover transform transition-all hover:scale-110"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
          {/* Curvy Divider Between Image and Content */}
          <div className="relative p-6 mt-[-30px] bg-white dark:bg-gray-800 rounded-t-lg z-10 border-t-4 border-gray-300">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-2"
            >
              Metaverse marketplace development - process and cost
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            In today&apos;s fast-paced digital world, you&apos;ve probably heard the word &qout;metaverse&quot; buzzing around. But what is it really? Think of it as a 3D virtual space—a place where you can hang out with friends, work, explore, and even shop, all through a digital version of yourself. 
            </p>
            <motion.a
              href="https://myfirstblog123.hashnode.dev/metaverse-marketplace-development-process-and-cost"
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Read More <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
