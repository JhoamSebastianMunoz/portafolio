'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '@/lib/portfolio-data';
import { 
  BuildingOfficeIcon,
  CalendarIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const ExperienceSection = () => {
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

  const timelineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
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
              Experiencia <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Profesional</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600 transform md:-translate-x-1/2"
              variants={timelineVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{ transformOrigin: "top" }}
            />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  variants={itemVariants}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full transform -translate-x-1/2 z-10"
                    whileHover={{ scale: 1.2 }}
                    style={{
                      left: '2rem'
                    }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className={`ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          <BuildingOfficeIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                          <p className="text-purple-600 font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Period */}
                      <div className={`flex items-center gap-2 text-gray-500 text-sm mb-3 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <CalendarIcon className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4">{exp.description}</p>

                      {/* Technologies */}
                      <div>
                        <div className={`flex items-center gap-2 text-sm font-medium text-gray-900 mb-2 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>
                          <CodeBracketIcon className="w-4 h-4" />
                          <span>Tecnologías:</span>
                        </div>
                        <div className={`flex flex-wrap gap-2 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
