import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://x.com/Sachida57622739?t=2qx6Zfnz473lSV-7SVeX1g&s=08" target="_blank" rel="noopener noreferrer"></a>
      <BsTwitter  />
    </div>
    <div>
      <a href="https://www.linkedin.com/in/sachidananda-mallick-341b84229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"></a>
      <FaLinkedinIn/>
    </div>
    <div>
      <a href="https://www.instagram.com/mr._mallick___?igsh=b3JuNHIyeGcxZ2Zx" target="_blank" rel="noopener noreferrer"></a>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;