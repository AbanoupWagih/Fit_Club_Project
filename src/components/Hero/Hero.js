import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*The Best Ad*/}
        <div className="the-best">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>The Best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body.</span>
          </div>
          <div>
            <span>
              In Here We Will Help You to shape and build your your ideal body
              and live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span><NumberCounter end={140} start={100} delay='4' preFix='+'/> </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span><NumberCounter end={978} start={800} delay='4' preFix='+'/></span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={0} delay='4' preFix='+'/></span>
            <span>fitness Programs</span>
          </div>
        </div>

        {/* Hero Button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          transition={transition}
          whileInView={{ right: "4rem" }}
          initial={{ right: "-1rem" }}
          className="heart-rate"
        >
          <img src={heart} alt="Heart img" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        <img src={heroImage} alt="img" className="hero-image" />
        <motion.img
          transition={transition}
          whileInView={{ right: "20rem" }}
          initial={{ right: "11rem" }}
          src={heroImageBack}
          alt="img"
          className="hero-image-back"
        />
        {/* Calories */}
        <motion.div
          transition={transition}
          whileInView={{ right: "28rem" }}
          initial={{ right: "37rem" }}
          className="calories"
        >
          <img src={calories} alt="Calories pic" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
