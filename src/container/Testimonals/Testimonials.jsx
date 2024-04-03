import React, { useState} from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Testimonials.scss';
import { images } from '../../constant';

const testimonials = [
  {
    _type: 'testimonials', // This should match the 'name' field in your schema
    name: 'Rudranarayan Sethi',
    company: 'Akrabhi Softlabs',
    imgurl: images.rudra, // URL to the image
    feedback: 'Exemplary full-stack developer with expertise in frontend and backend technologies. Exceptional problem-solving skills and dedication to delivering high-quality, scalable solutions. Highly recommended for any development project',
  },
  {
    _type: 'testimonials',
    name: 'Pratyukt Mohapatra',
    company: 'Apmosys',
    imgurl: images.pro, // URL to the image
    feedback: 'Outstanding full-stack developer with a strong command of both frontend and backend technologies. Demonstrates exceptional attention to detail and consistently delivers efficient, well-structured solutions. A valuable asset to any team.',
  },
  // Add more testimonials as needed
];
const brands = [
  {
    _type: 'brands', // This should match the 'name' field in your schema
    imgUrl: images.apmosys, // URL to the image
    name: 'Brand 1',
  },
  // Add more brands as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };


  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={(testimonials[currentIndex].imgurl)} alt={testimonials[currentIndex].name} />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonial',
  'app__primarybg',
);