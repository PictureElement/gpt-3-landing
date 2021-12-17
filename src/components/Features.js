import React from 'react';
import Feature from './Feature';
import './Features.scss';
import { RiArrowRightSLine } from "react-icons/ri";

const features = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum vehicula tellus, eu porta purus sagittis vel.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum vehicula tellus, eu porta purus sagittis vel.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum vehicula tellus, eu porta purus sagittis vel.'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum vehicula tellus, eu porta purus sagittis vel.'
  }
]

function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features__surface">
          <div className="features__left">
            <h2 className="features__title">The future is now and you just need to realize it. Step into the future today and make it happen.</h2>
            <a className="features__link" href=".">Sign up for the demo <RiArrowRightSLine /></a>
          </div>
          <div className="features__right">
            {
              features.map((item, index) => <Feature title={item.title} text={item.text} key={index} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features;
