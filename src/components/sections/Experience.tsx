import { motion } from 'framer-motion';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';
import { experience } from '../../data/portfolio';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Experience" subtitle="Where I've contributed" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard hover={false} className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent to-transparent hidden sm:block" />

            <div className="flex items-start gap-6">
              <div className="hidden sm:flex w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent mt-2 shrink-0 relative z-10 ring-4 ring-[#030712]" />

              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400 sm:hidden">
                    <HiBriefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{experience.company}</h3>
                    <p className="text-primary-400 font-medium">{experience.role}</p>
                  </div>
                </div>

                <ul className="space-y-3 mt-6">
                  {experience.responsibilities.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <HiCheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
