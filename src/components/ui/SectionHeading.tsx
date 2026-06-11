import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 dark:text-gray-400 text-gray-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent" />
      </div>
    </motion.div>
  );
}
