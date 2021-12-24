import React from 'react';
import Article from './Article';
import './Blog.scss';
import { RiArrowRightSLine } from "react-icons/ri";

function Blog() {
  return (
    <section className="blog">
      <div className="container">
          <div className="blog__introduction">
            <h2 className="blog__title">A lot is happening and we're blogging about it.</h2>
            <a className="blog__link" href=".">All stories <RiArrowRightSLine /></a>
          </div>
          <ul className="media-list">
            <li className="media-list__item media-list__item_1">
              <a href="." className="media-list__link">
                <article className="post">
                  <img src="https://placehold.co/1600x900/png" className="post__image" alt="..." />
                  <div className="post__body">
                    <div>
                      <div className="post__date">Jun 24, 2021</div>
                      <h3 className="post__title">GPT-3 powers the next generation of apps.</h3>
                    </div>
                  </div>
                </article>
              </a>
            </li>
            <li className="media-list__item media-list__item_2">
              <a href="." className="media-list__link">
                <Article />
              </a>
            </li>
            <li className="media-list__item media-list__item_3">
              <a href="." className="media-list__link">
                <Article />
              </a>
            </li>
            <li className="media-list__item media-list__item_4">
              <a href="." className="media-list__link">
                <Article />
              </a>
            </li>
            <li className="media-list__item media-list__item_5">
              <a href="." className="media-list__link">
                <Article />
              </a>
            </li>
          </ul>
      </div>
    </section>
  )
}

export default Blog;
