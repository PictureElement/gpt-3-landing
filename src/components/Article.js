import React from 'react';
import './Article.scss';

function Article() {
  return (
    <article className="post">
      <div className="post__body">
        <div>
          <div className="post__date">Jun 24, 2021</div>
          <h3 className="post__title">GPT-3 powers the next generation of apps.</h3>
        </div>
      </div>
    </article>
  )
}

export default Article;
