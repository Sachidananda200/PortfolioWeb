// eslint-disable-next-line no-unused-vars
import React from 'react'
import {images} from '../../constant'
import {motion} from 'framer-motion'
import { AppWrap } from '../../wrapper'
import './Header.scss'
import 'animate.css';
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView = {{ x: [-100,0], opacity :[0,1]}}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
      >
        <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span className='wave'>👋</span>
          <div style={{ marginLeft: 20}}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text animate__rubberBand animate__animated">Sachidananda</h1>
          </div>
        </div>
        <div className="tag-cmp app__flex">
          <p className="p-text">Fullstack Web Developer</p>
          <p className="p-text"></p>
        </div>
      </div>
      </motion.div>
      <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.imagehero} alt="profile_bg" className='myimg animate__backInDown animate__animated '/>
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.node, images.angular].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
    </div> 
  )
}

export default AppWrap(Header,'home')