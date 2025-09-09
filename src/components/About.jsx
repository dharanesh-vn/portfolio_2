import React from 'react';
import { motion } from 'framer-motion';
import { education, professionalExperience, interests } from '../data';
import './about.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>
        <div className="about-grid">
          <div>
            <h3 className="about-subtitle">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="about-item"
              >
                <h4>{edu.institution}</h4>
                <p>{edu.degree}</p>
                <p className="item-meta">{edu.duration}</p>
                <p className="item-meta">CGPA: {edu.cgpa || edu.score}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="about-subtitle">Professional Experience</h3>
            {professionalExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="about-item"
              >
                <h4>{exp.role}</h4>
                <p>{exp.company}</p>
                <p className="item-meta">{exp.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="interests-section">
          <h3 className="about-subtitle">Interests</h3>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="interests-container"
          >
            {interests.map((interest, index) => (
              <span key={index} className="interest-tag">
                {interest}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;