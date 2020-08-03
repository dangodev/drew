import { h } from 'preact'; // eslint-disable-line

import style from './style.css';

import drew from '../../assets/drew1.jpg';

import codepen from '../../assets/codepen.svg';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import rss from '../../assets/rss.svg';
import twitter from '../../assets/twitter.svg';

const About = () => (
  <div className={style.about}>
    <div className={style.photowrapper}>
      <img className={style.photo} src={drew} alt="Drew Powers" />
    </div>
    <div className={style.text}>
      <p>
        I’ve been a builder and creator of the Web since 2001, and I’m fortunate to have turned one
        of my passions into a career. I’m a Tech Lead at{' '}
        <a href="https://manifold.co" target="_blank" rel="noopener noreferrer">
          Manifold
        </a>
        , delivering beautiful, functional UIs for a developer marketplace. Before that, I was a
        one-person agency for nearly a decade and delivered web consulting, design, and development.
        From 2013–2017 I consulted, designed, and engineered at an agency called{' '}
        <a href="http://madewithenvy.com" target="_blank" rel="noopener noreferrer">
          Envy&nbsp;Labs
        </a>{' '}
        . From 2010–2012, I helped local businesses succeed at an agency called{' '}
        <a href="http://kmdg.com/" target="_blank" rel="noopener noreferrer">
          KMDG
        </a>
        . I speak about stuff I know at conferences like at{' '}
        <a href="https://allthingsopen" target="_blank" rel="noopener noreferrer">
          All Things Open
        </a>{' '}
        and local meetups, and I contribute to{' '}
        <a href="https://github.com/drwpow/" target="_blank" rel="noopener noreferrer">
          Open Source
        </a>
        . I’ve supported local creators through{' '}
        <a href="http://orlandocreators.com" target="_blank" rel="noopener noreferrer">
          Orlando Creators
        </a>
        , and have mentored developers and designers in partnerships with local colleges and various
        community&nbsp;programs.
      </p>
      <p>
        Some things I believe:
        <br />
        <br />
        1/ Good ideas should endure. Even if they’re old. Even if they’re not mine. 2/ Ideas without
        effort are worthless. 3/ Intentions don’t matter; impacts do. 4/ Everyone tries hard at
        something; start noticing. 5/ Lasting relationships are built on making your intentions
        clear. 6/ I can always change my mind with new information. 7/ Always be&nbsp;kind.
        <br />
        <br />
        But enough about me.{' '}
        <a href="mailto:drew@pow.rs?subject=Hello%20Stranger">Tell me about you</a>!
      </p>
    </div>
    <h3 className={style.elsewhere}>Elsewhere</h3>
    <div className={style.links}>
      <a className={style.link} href="./blog">
        <img src={rss} alt="Personal blog of Drew Powers" />
      </a>
      <a
        className={style.link}
        href="https://twitter.com/drwpow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Drew Powers on Twitter" />
      </a>
      <a
        className={style.link}
        href="https://github.com/drwpow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="Drew Powers on GitHub" />
      </a>
      <a
        className={style.link}
        href="https://codepen.io/dangodev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={codepen} alt="Drew Powers on CodePen" />
      </a>
      <a
        className={style.link}
        href="https://dribbble.com/drewpowers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={dribbble} alt="Drew Powers on Dribbble" />
      </a>
    </div>
    <div className={style.colophon}>
      Set in Cardinal Grotesque by{' '}
      <a
        href="https://www.verycoolstudio.com/shop/cardinal-grotesque/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Very Cool Studio
      </a>{' '}
      / PWA made with{' '}
      <a href="https://github.com/developit/preact-cli" target="_blank" rel="noopener noreferrer">
        Preact
      </a>{' '}
      / This website is encrypted and 100% tracker-free 🖤
    </div>
  </div>
);

export default About;
