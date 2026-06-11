import { motion } from 'framer-motion';
import { FaCertificate, FaCode, FaTrophy, FaUsers } from 'react-icons/fa';
import { achievements } from '../../data/portfolio';
import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';

const achievementIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  code: FaCode,
  team: FaUsers,
  certificate: FaCertificate,
  trophy: FaTrophy,
};

const achievementGradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-amber-500 to-orange-500',
  'from-green-500 to-emerald-500',
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Achievements" subtitle="Milestones along the journey" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievementIcons[achievement.icon];
            const gradient = achievementGradients[index % achievementGradients.length];

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center group">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <h3 className="font-semibold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
