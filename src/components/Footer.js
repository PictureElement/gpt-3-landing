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

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer__title">Do you want to step into the future before others?</h2>
        <button type="button" className="footer__button">Sign up for the demo</button>
        <div className="footer__links">
          <div>
            <a className="footer__brand" href=".">
              <img src={logo} alt="logo" />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in faucibus magna. Pellentesque sed diam venenatis, ullamcorper nulla ac, tempor sapien.</p>
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
        </div>
      </div>
    </footer>
  )
}

export default Footer;
