import React from 'react';
import './SocialProof.scss';
import atlassian from '../assets/atlassian.png';
import dropbox from '../assets/dropbox.png';
import google from '../assets/google.png';
import shopify from '../assets/shopify.png';
import slack from '../assets/slack.png';

function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container social-proof__container">
        <img className="social-proof__image" height="24" src={atlassian} alt='...' />
        <img className="social-proof__image" height="24" src={dropbox} alt='...' />
        <img className="social-proof__image" height="24" src={google} alt='...' />
        <img className="social-proof__image" height="24" src={shopify} alt='...' />
        <img className="social-proof__image" height="24" src={slack} alt='...' />
      </div>
    </section>
  )
}

export default SocialProof;
