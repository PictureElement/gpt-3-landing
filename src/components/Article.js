import React from 'react';
import './Article.scss';

function Article({ title, date }) {
  return (
    <article className="post">
      <div className="post__body">
        <div>
          <div className="post__date">{ date }</div>
          <h3 className="post__title">{ title }</h3>
        </div>
      </div>
    </article>
  )
}

export default Article;
