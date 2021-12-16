import React from 'react';
import './Feature.scss';

function Feature({ title, text }) {
  return (
    <article className="feature">
      <h3 className="feature__title">{title}</h3>
      <p className="feature__text">{text}</p>
    </article>
  )
}

export default Feature;
