/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constant';
import './About.scss';
import { AppWrap } from '../../wrapper';

const abouts = [
  { title: 'Web Development', description: 'Proficient in web development, skilled in creating responsive and dynamic websites using HTML, CSS, JavaScript, and modern frameworks like React.js, with a focus on user-centric design and functionality.', imgUrl: images.about01 },
  { title: 'Frontend Development', description: 'Proficient in crafting intuitive user interfaces with HTML, CSS, and JavaScript, utilizing frameworks like React.js to create dynamic and responsive web applications', imgUrl: images.about02 },
  { title: 'Backend Development', description: 'Experienced in building robust server-side applications using Node.js, Express.js, and databases like MongoDB, ensuring seamless data management and API integrations.', imgUrl: images.about03 },
  { title: 'MERN Stack', description: 'Skilled in full-stack development with expertise in MongoDB, Express.js, React.js, and Node.js, proficiently building scalable and interactive web applications from frontend to backend', imgUrl: images.about04 }
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileHover={{ scale: 1.1, zIndex: 1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="app__profile-item"
            key={about.title + index}
          >
            <motion.img
              src={about.imgUrl}
              alt={about.title}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.h2
              className="bold-text"
              style={{ marginTop: 20 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {about.title}
            </motion.h2>
            <motion.p
              className="p-text"
              style={{ marginTop: 10 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {about.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
