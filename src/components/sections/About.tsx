import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiLightningBolt, HiSparkles } from 'react-icons/hi';
import { personalInfo } from '../../data/portfolio';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const highlights = [
  {
    icon: HiCode,
    title: 'React Native Development',
    description: 'Building cross-platform mobile apps with modern React Native architecture.',
  },
  {
    icon: HiLightningBolt,
    title: 'Mobile Applications',
    description: 'Creating intuitive, performant mobile experiences for iOS and Android.',
  },
  {
    icon: HiSparkles,
    title: 'Firebase & Redux',
    description: 'Real-time backend integration and scalable state management solutions.',
  },
  {
    icon: HiAcademicCap,
    title: 'Problem Solving',
    description: 'Strong DSA foundation with 150+ problems solved across platforms.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="mb-6">
              <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {personalInfo.about}
              </p>
            </GlassCard>

            <GlassCard hover={false}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 text-primary-400">
                  <HiAcademicCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{personalInfo.education.degree}</h4>
                  <p className="text-gray-400 text-sm mb-2">{personalInfo.education.institution}</p>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400">
                    CGPA: {personalInfo.education.cgpa}
                  </span>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full">
                  <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 w-fit mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
