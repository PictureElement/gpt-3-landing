import React from 'react';
import './List.scss';

function Links({ title, items }) {
  return (
    <div className="list">
      <h3 className="list__title">{title}</h3>
      <ul className="list__group">
        {
          items.map(item => {
            return (
              <li><a href={item.url}>{item.name}</a></li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Links;
