import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contact-content"
        >
          <p>I'm currently open to new opportunities. Feel free to reach out!</p>
          <a href={`mailto:${personalData.email}`} className="contact-email">{personalData.email}</a>
          <p className="contact-phone">{personalData.phone}</p>
          <div className="contact-socials">
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;