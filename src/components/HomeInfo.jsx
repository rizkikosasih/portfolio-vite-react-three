import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Rizki</span> 👋
        <p>A Web Developer from Indonesia 🇮🇩</p>
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Working in one of the ecommerce companies in Indonesia
          <br />
          and enjoy learning new technologies
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          View more
          <IoArrowForward />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Have more than 2.5 years of experience in programming
          <br />
          to develop, test and observe enterprise applications
        </p>

        <Link to="/skills" className="neo-brutalism-white neo-btn">
          My talents
          <IoArrowForward />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Looking for a dev? <br /> I'm just a few keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's Talk
          <IoArrowForward />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
