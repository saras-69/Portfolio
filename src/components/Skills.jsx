import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaSass, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaLinux, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiPostgresql, SiFlask, SiAngular, SiJquery } from 'react-icons/si';
import { TbBrandCpp, TbBrandVscode } from 'react-icons/tb';

const Skills = () => {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { id: 3, name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-500" /> },
    { id: 4, name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-600" /> },
    { id: 5, name: "Bootstrap", icon: <FaBootstrap size={50} className="text-purple-500" /> },
    { id: 6, name: "Sass", icon: <FaSass size={50} className="text-pink-500" /> },
    { id: 7, name: "Tailwind CSS", icon: <SiTailwindcss size={50} className="text-cyan-400" /> },
    { id: 8, name: "React", icon: <FaReact size={50} className="text-blue-400" /> },
    { id: 9, name: "Angular", icon: <SiAngular size={50} className="text-red-600" /> },
    { id: 10, name: "Node.js", icon: <FaNodeJs size={50} className="text-green-500" /> },
    { id: 11, name: "Python", icon: <FaPython size={50} className="text-blue-300" /> },
    { id: 12, name: "Java", icon: <FaJava size={50} className="text-red-500" /> },
    { id: 13, name: "C++", icon: <TbBrandCpp size={50} className="text-blue-500" /> },
    { id: 14, name: "MongoDB", icon: <SiMongodb size={50} className="text-green-500" /> },
    { id: 15, name: "MySQL", icon: <SiMysql size={50} className="text-blue-700" /> },
    { id: 16, name: "PostgreSQL", icon: <SiPostgresql size={50} className="text-blue-400" /> },
    { id: 17, name: "Flask", icon: <SiFlask size={50} className="text-gray-300" /> },
    { id: 18, name: "jQuery", icon: <SiJquery size={50} className="text-blue-500" /> },
    { id: 19, name: "Git", icon: <FaGitAlt size={50} className="text-orange-600" /> },
    { id: 20, name: "GitHub", icon: <FaGithub size={50} className="text-white" /> },
    { id: 21, name: "VS Code", icon: <TbBrandVscode size={50} className="text-blue-500" /> },
    { id: 22, name: "Linux", icon: <FaLinux size={50} className="text-yellow-500" /> },
    { id: 23, name: "PHP", icon: <FaPhp size={50} className="text-purple-600" /> },
    { id: 24, name: "Laravel", icon: <FaLaravel size={50} className="text-red-500" /> },
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-gradient-to-b from-gray-800/80 to-black/80 text-white py-16">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold inline border-b-4 border-blue-500"
          >
            Skills & Technologies
          </motion.h2>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center"
        >
          {skills.map(({ id, name, icon }) => (
            <div
              key={id}
              className="bg-gray-900 rounded-lg shadow-md hover:shadow-blue-500/20 p-4 hover:scale-105 duration-500"
            >
              <div className="flex justify-center mb-2">
                {icon}
              </div>
              <p className="text-lg">{name}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {["Problem Solving", "Adaptability", "Time Management", "Collaboration", "Critical Thinking", "Communication"].map((skill, index) => (
              <span key={index} className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;