import React from 'react';
import './Hero.scss';
import users from '../assets/users.png';
import ai from '../assets/ai.png';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <h1 className="hero__title text-gradient">Let's build something amazing with GPT-3 OpenAI</h1>
          <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus porttitor euismod. Donec eget accumsan ex. Praesent vestibulum quis ligula sed suscipit.</p>
          <form className="subscribe-form">
            <div className="subscribe-form__group">
              <label className="visually-hidden" for="email-subscribe">Enter your email</label>
              <input className="subscribe-form__input" type="email" id="email-subscribe" name="email" placeholder="example@email.com" required="" value="" />
            </div>
            <button class="subscribe-form__submit" tabindex="0" type="submit">Get started</button>
          </form>
          <div class="hero__users">
            <img src={users} alt="..." />
            <p>1,600 users have been approved for early access in the past 24h.</p>
          </div>
        </div>
        <div className="hero__right">
          <img className="scale-up-center" src={ai} alt="..." />
        </div>
      </div>
    </section>
  )
}

export default Hero;
