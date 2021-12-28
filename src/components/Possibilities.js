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
            <img width="1" height="1" className="possibilities__image" src={possibilities} loading="lazy" alt="..." />
            {/* <img
              className="possibilities__image"
              width="1"
              height="1"
              src="https://dummyimage.com/426"
              srcSet="
                https://dummyimage.com/426 426w,
                https://dummyimage.com/852 852w,
                https://dummyimage.com/353 353w,
                https://dummyimage.com/706 706w,
                https://dummyimage.com/251 251w,
                https://dummyimage.com/502 502w,
                https://dummyimage.com/508 508w,
                https://dummyimage.com/1016 1016w,
                https://dummyimage.com/414 414w,
                https://dummyimage.com/828 828w,
                https://dummyimage.com/375 375w,
                https://dummyimage.com/750 750w,
                https://dummyimage.com/360 360w,
                https://dummyimage.com/720 720w
              "
              sizes="
                (min-width: 1200px) 426px,
                (min-width: 992px) 353px,
                (min-width: 768px) 251px,
                (min-width: 576px) 508px,
                calc(100vw - 32px)"
              loading="lazy"
              alt="..."
            /> */}
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
