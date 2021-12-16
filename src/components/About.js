import React from 'react';
import Feature from './Feature';
import './About.scss';
import { RiArrowRightSLine } from "react-icons/ri";

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__surface">
          <h2 className="about__title">The possibilities are beyond your imagination</h2>
          <a className="about__link" href=".">Explore the library <RiArrowRightSLine /></a>
          <div className="about__bottom">
            <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus porttitor euismod. Donec eget accumsan ex." />
            <Feature title="Knowledge base" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus porttitor euismod. Donec eget accumsan ex." />
            <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus porttitor euismod. Donec eget accumsan ex." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
