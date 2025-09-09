import React from 'react';
import { personalData } from '../data';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;