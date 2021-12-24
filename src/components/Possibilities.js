import React from 'react';
import './Possibilities.scss';
import possibilities from '../assets/possibilities.png';
import { RiArrowRightSLine } from "react-icons/ri";

function Possibilities() {
  return (
    <section className="possibilities">
      <div className="container">
        <div className="possibilities__surface">
          <div className="possibilities__left">
            <img className="possibilities__image" src={possibilities} alt="..." />
          </div>
          <div className="possibilities__right">
            <div className="possibilities__introduction">
              <h2 className="possibilities__title">The possibilities are beyond your imagination</h2>
              <a className="possibilities__link" href=".">Sign up for the demo <RiArrowRightSLine /></a>
            </div>
            <div className="possibilities__text">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum vehicula tellus, eu porta purus sagittis vel. Sed ultricies consectetur felis, sollicitudin bibendum lectus ornare vitae.</p>                              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum vehicula tellus, eu porta purus sagittis vel. Sed ultricies consectetur felis, sollicitudin bibendum lectus ornare vitae.</p>                              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Possibilities;
