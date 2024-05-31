import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../../assets/cv/CV.pdf"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, It's <span>Bharath</span></h1>
        <h2 className="typing-text">I'm a <span></span></h2>
        <p className={styles.description}>
          I'm a full-stack developer with 6 Months of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:yellebharath@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href={resume} download="Resume" className={styles.contactBtn}>
            Download CV
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/WhatsApp Image 2024-01-05 at 11.41.53_e8310fa0.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};