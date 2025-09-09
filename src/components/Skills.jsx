import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills
        </motion.h2>
        <div className="skills-grid">
          <SkillCategory title="Programming Languages" skills={skills.programming} />
          <SkillCategory title="Tools" skills={skills.tools} />
          <SkillCategory title="Soft Skills" skills={skills.softSkills} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="skill-category"
    >
      <h3>{title}</h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;