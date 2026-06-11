import { motion } from 'framer-motion';
import { HiDownload, HiLocationMarker, HiMail } from 'react-icons/hi';
import { personalInfo, typewriterTexts } from '../../data/portfolio';
import Button from '../ui/Button';
import ParticleBackground from '../ui/ParticleBackground';
import Typewriter from '../ui/Typewriter';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-[#030712]">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent/10 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
        <ParticleBackground />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-[2px] bg-primary-500" />
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4"
            >
              {personalInfo.name.split(' ').slice(0, -2).join(' ')}{' '}
              <span className="gradient-text">
                {personalInfo.name.split(' ').slice(-2).join(' ')}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-400 mb-6 h-8"
            >
              <Typewriter texts={typewriterTexts} className="text-accent-light" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              {personalInfo.introduction}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-8"
            >
              <span className="flex items-center gap-2">
                <HiLocationMarker className="text-primary-400" />
                {personalInfo.location}
              </span>
              <span className="flex items-center gap-2">
                <HiMail className="text-primary-400" />
                {personalInfo.email}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/resume.pdf" variant="primary">
                <HiDownload className="w-4 h-4" />
                Download Resume
              </Button>
              <Button href="#contact" variant="outline">
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500 via-accent to-primary-400 opacity-30 blur-sm"
              />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden glass gradient-border animate-float">
                <div className="w-full h-full bg-gradient-to-br from-primary-900/50 to-accent/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl">
                      GR
                    </div>
                    <p className="text-gray-400 text-sm mt-4">Profile Photo</p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 gradient-border"
              >
                <p className="text-2xl font-bold gradient-text">8.43</p>
                <p className="text-gray-500 text-xs">CGPA</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 gradient-border"
              >
                <p className="text-2xl font-bold gradient-text">150+</p>
                <p className="text-gray-500 text-xs">DSA Solved</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
