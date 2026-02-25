'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, skills } from '@/lib/portfolio-data';
import { 
  AcademicCapIcon,
  CodeBracketIcon,
  ServerIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <CodeBracketIcon className="w-6 h-6" />;
      case 'backend':
        return <ServerIcon className="w-6 h-6" />;
      case 'database':
        return <AcademicCapIcon className="w-6 h-6" />;
      case 'tools':
        return <CogIcon className="w-6 h-6" />;
      default:
        return <CodeBracketIcon className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-blue-500 to-cyan-500';
      case 'backend':
        return 'from-green-500 to-emerald-500';
      case 'database':
        return 'from-purple-500 to-pink-500';
      case 'tools':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Mí</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          {/* Profile Description */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
            variants={itemVariants}
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {personalInfo.profile}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Competencias <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Técnicas</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <motion.div
                  key={category}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${getCategoryColor(category)} text-white mb-6 mx-auto`}>
                    {getSkillIcon(category)}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center capitalize">
                    {category === 'frontend' ? 'Frontend' : 
                     category === 'backend' ? 'Backend' : 
                     category === 'database' ? 'Bases de Datos' : 'Herramientas'}
                  </h4>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(skill.category)}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
