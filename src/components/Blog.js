import React from 'react';
import Article from './Article';
import './Blog.scss';
import postImage from '../assets/post.jpg';
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
                  <div className="post__image-wrapper">
                    <img className="post__image" width="16" height="9" src={postImage} loading="lazy" alt="..." />
                    {/* <img
                      className="post__image"
                      width="16"
                      height="9"
                      src="https://dummyimage.com/522x294"
                      srcSet="
                        https://dummyimage.com/522x294 522w,
                        https://dummyimage.com/1044x587 1044w,
                        https://dummyimage.com/434x244 434w,
                        https://dummyimage.com/868x488 868w,
                        https://dummyimage.com/316x178 316w,
                        https://dummyimage.com/632x356 632w,
                        https://dummyimage.com/508x286 508w,
                        https://dummyimage.com/1016x572 1016w,
                        https://dummyimage.com/414x233 414w,
                        https://dummyimage.com/828x466 828w,
                        https://dummyimage.com/375x211 375w,
                        https://dummyimage.com/750x422 750w,
                        https://dummyimage.com/360x203 360w,
                        https://dummyimage.com/720x405 720w
                      "
                      sizes="
                        (min-width: 1200px) 522px,
                        (min-width: 992px) 434px,
                        (min-width: 768px) 316px,
                        (min-width: 576px) 508px,
                        calc(100vw - 32px)"
                      loading="lazy"
                      alt="..."
                    /> */}
                  </div>
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
                <Article date="Jun 24, 2021" title="GPT-3 powers the next generation of apps 1." />
              </a>
            </li>
            <li className="media-list__item media-list__item_3">
              <a href="." className="media-list__link">
                <Article date="Dec 24, 2021" title="GPT-3 powers the next generation of apps 2." />
              </a>
            </li>
            <li className="media-list__item media-list__item_4">
              <a href="." className="media-list__link">
                <Article date="Jan 24, 2021" title="GPT-3 powers the next generation of apps 3." />
              </a>
            </li>
            <li className="media-list__item media-list__item_5">
              <a href="." className="media-list__link">
                <Article date="Aug 24, 2021" title="GPT-3 powers the next generation of apps 4." />
              </a>
            </li>
          </ul>
      </div>
    </section>
  )
}

export default Blog;
