import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data';
import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title">Hello, I'm {personalData.name}</h1>
        <p className="hero-subtitle">A passionate developer and designer.</p>
      </motion.div>
    </section>
  );
};

export default Hero;