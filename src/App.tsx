import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import BackToTop from './components/layout/BackToTop';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';
import ScrollProgress from './components/layout/ScrollProgress';
import About from './components/sections/About';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import FeaturedProject from './components/sections/FeaturedProject';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme } = useTheme();

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div
          className={`min-h-screen transition-colors duration-300 ${
            theme === 'dark'
              ? 'bg-[#030712] text-white'
              : 'bg-gray-50 text-gray-900'
          }`}
        >
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <FeaturedProject />
            <Experience />
            <Achievements />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      )}
    </>
  );
}

export default App;
