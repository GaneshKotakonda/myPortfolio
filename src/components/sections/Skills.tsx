import { motion } from 'framer-motion';
import {
  HiCode,
  HiColorSwatch,
  HiDatabase,
  HiTerminal,
} from 'react-icons/hi';
import { skillCategories } from '../../data/portfolio';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  code: HiCode,
  frontend: HiColorSwatch,
  backend: HiDatabase,
  tools: HiTerminal,
};

const categoryColors: Record<string, string> = {
  code: 'from-blue-500 to-cyan-500',
  frontend: 'from-purple-500 to-pink-500',
  backend: 'from-green-500 to-emerald-500',
  tools: 'from-orange-500 to-amber-500',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = categoryIcons[category.icon];
            const gradient = categoryColors[category.icon];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full group">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-primary-500/30 hover:text-primary-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
