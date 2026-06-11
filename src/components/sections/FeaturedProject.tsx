import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiCheck, HiX } from 'react-icons/hi';
import { featuredProject } from '../../data/portfolio';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function FeaturedProject() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Project" subtitle="Showcasing my best work" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="overflow-hidden p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="aspect-video lg:aspect-auto lg:h-full bg-gradient-to-br from-primary-900/40 to-accent/20 flex items-center justify-center min-h-[280px]">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-4 py-2 rounded-lg glass text-white text-sm font-medium">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                    {featuredProject.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">{featuredProject.description}</p>

                  <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                    {featuredProject.features.slice(0, 6).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <HiCheck className="w-4 h-4 text-accent shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-3">
                    <Button
                      href={featuredProject.githubUrl}
                      variant="primary"
                      external
                    >
                      <FaGithub className="w-4 h-4" />
                      View on GitHub
                    </Button>
                    <Button
                      href={featuredProject.liveUrl}
                      variant="outline"
                      external
                    >
                      <FaExternalLinkAlt className="w-3 h-3" />
                      Live Demo
                    </Button>
                    <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-4 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[90] sm:w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-2xl gradient-border"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded-full bg-primary-500/10 text-primary-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
                    aria-label="Close modal"
                  >
                    <HiX className="w-5 h-5" />
                  </button>
                </div>

                <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-primary-900/40 to-accent/20">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>

                <p className="text-gray-400 mb-6">{featuredProject.description}</p>

                <h4 className="font-semibold text-white mb-3">Features</h4>
                <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                  {featuredProject.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <HiCheck className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Button href={featuredProject.githubUrl} variant="primary" external>
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </Button>
                  <Button href={featuredProject.liveUrl} variant="outline" external>
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
