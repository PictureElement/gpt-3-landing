import React from 'react';
import List from './List';
import './Footer.scss';
import logo from '../assets/logo.svg';

const linksItems = [
  {name: 'Home', url: '/'},
  {name: 'Docs', url: '/docs'},
  {name: 'Blog', url: '/blog'},
  {name: 'Examples', url: '/examples'}
];

const guidesItems = [
  {name: 'Getting started', url: '/getting-started'},
  {name: 'Starter template', url: '/starter-template'},
  {name: 'Webpack', url: '/webpack'},
  {name: 'Parcel', url: '/parcel'}
];

const communityItems = [
  {name: 'Issues', url: '/issues'},
  {name: 'Discussions', url: '/discussions'},
  {name: 'Sponsors', url: '/sponsors'},
  {name: 'Slack', url: '/slack'},
  {name: 'Slack Overflow', url: '/stack-overflow'},
];

const projectsItems = [
  {name: 'Bootstrap 5', url: '/'},
  {name: 'Bootstrap 4', url: '/'},
  {name: 'Icons', url: '/'},
  {name: 'RFS', url: '/'}
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__introduction">
          <h2 className="footer__title">Do you want to step into the future before others?</h2>
          <button type="button" className="footer__button">Sign up for the demo</button>
        </div>
        <div className="footer__row">
          <div>
            <a className="footer__brand" href=".">
              <img src={logo} alt="logo" />
            </a>
            <p className="footer__statement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in faucibus magna. Pellentesque sed diam venenatis, ullamcorper nulla ac, tempor sapien.</p>
            <p className="footer__copyright">© 2021 OpenAI. All rights reserved.</p>
          </div>
          <div>
            <List title="Links" items={linksItems} />
          </div>
          <div>
            <List title="Guides" items={guidesItems} />
          </div>
          <div>
            <List title="Community" items={communityItems} />
          </div>
          <div>
            <List title="Projects" items={projectsItems} />
          </div>
        </div>
        <div className="footer__credits">Designed by <a target="_blank" rel="noopener noreferrer" href="https://www.arshakir.com/project/freebie-gpt-3-landing-page">AR Shakir</a>. Developed by <a href="https://www.msof.me/" target="_blank" rel="noopener noreferrer">Marios Sofokleous</a></div>
      </div>
    </footer>
  )
}

export default Footer;
