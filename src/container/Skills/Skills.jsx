import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';
import { images } from '../../constant';

const skill = [
  { name: "React", bgColor:'', icon: images.react },
  { name: "Node.js", bgColor:'', icon: images.node },
  { name: "Mongo", bgColor:'', icon: images.mongo },
  { name: "GIT", bgColor:'', icon: images.git },
  { name: "Angular", bgColor:'', icon: images.angular },
  { name: "Express", bgColor:'', icon: images.node },
  // Add more skills as needed
];

const experiences = [
  {
    year: "2024",
    works: [
      {
        name: "Fullstack Developer",
        company: "Apmosys Pvt.Ltd",
        desc: "Responsible for developing user interfaces using React.js and backend  services using Node.js."
      }
    ]
  },
  {
    year: "2023",
    works: [
      {
        name: "Software Engineer Intern",
        company: "Akrabhi Softlabs",
        desc: "Assisted in developing frontend using React.js and APIs using Node.js and Express."
      }
    ]
  }
];

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skill.map((skillItem) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skillItem.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skillItem.bgColor }}
              >
                <img src={skillItem.icon} alt={skillItem.name} />
              </div>
              <p className="p-text">{skillItem.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div
                    className="app__skills-exp-work"
                    data-tip={work.desc} // Use data attribute to store tooltip content
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
