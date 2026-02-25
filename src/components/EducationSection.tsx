'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education, certifications } from '@/lib/portfolio-data';
import { 
  AcademicCapIcon,
  BuildingOfficeIcon,
  CheckCircleIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const EducationSection = () => {
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

  return (
    <section id="education" className="py-20 bg-white">
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
              Educación y <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">Certificaciones</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <AcademicCapIcon className="w-8 h-8 text-purple-600" />
                  Educación Formal
                </h3>
                
                <div className="space-y-6">
                  {education.map((edu) => (
                    <motion.div
                      key={edu.id}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          <BuildingOfficeIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h4>
                          <p className="text-purple-600 font-medium mb-1">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                            <ClockIcon className="w-4 h-4" />
                            <span>{edu.period}</span>
                            <span>•</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <CheckCircleIcon className="w-8 h-8 text-blue-600" />
                  Certificaciones
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.id}
                      className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white flex-shrink-0 ${
                            cert.status === 'completed' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                              : 'bg-gradient-to-r from-orange-500 to-yellow-500'
                          }`}>
                            {cert.status === 'completed' ? (
                              <CheckCircleIcon className="w-6 h-6" />
                            ) : (
                              <ClockIcon className="w-6 h-6" />
                            )}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                            <p className="text-gray-600">{cert.issuer}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-500">{cert.year}</span>
                          <div className="mt-1">
                            {cert.status === 'completed' ? (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                <CheckCircleIcon className="w-3 h-3" />
                                Completado
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium">
                                <ClockIcon className="w-3 h-3" />
                                En curso
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
