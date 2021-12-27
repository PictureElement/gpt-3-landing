import React, { useState } from 'react';
import './Hero.scss';
import users from '../assets/users.png';
import ai from '../assets/ai.png';

function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }

  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <h1 className="hero__title text-gradient">Let's build something amazing with GPT-3 OpenAI</h1>
          <p className="hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus porttitor euismod. Donec eget accumsan ex. Praesent vestibulum quis ligula sed suscipit.</p>
          <form className="subscribe-form" onSubmit={handleSubmit}>
            <div className="subscribe-form__group">
              <label className="visually-hidden" htmlFor="email-subscribe">Enter your email</label>
              <input className="subscribe-form__input" type="email" id="email-subscribe" name="email" placeholder="example@email.com" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className="subscribe-form__submit" tabIndex="0" type="submit">Get started</button>
          </form>
          <div className="hero__users">
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
