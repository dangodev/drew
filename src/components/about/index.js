import { h } from 'preact'; // eslint-disable-line

import style from './style.css';

import drew from '../../assets/drew1.jpg';

import codepen from '../../assets/codepen.svg';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import medium from '../../assets/medium.svg';
import twitter from '../../assets/twitter.svg';

const About = () => (
  <div className={style.about}>
    <div className={style.photowrapper}>
      <img className={style.photo} src={drew} alt="Drew Powers" />
    </div>
    <div className={style.text}>
      <p>
        I’ve been a designer and builder of the Web since 2001 (but I’m not sure you can call the
        first several years “professional”). I’m currently a Senior Front end Engineer at{' '}
        <a href="https://manifold.co" target="_blank" rel="noopener noreferrer">
          Manifold
        </a>
        , helping to build the world’s biggest independent cloud marketplace. Previously, I built
        large-scale design systems and front-end architecture for web apps through{' '}
        <a href="http://madewithenvy.com" target="_blank" rel="noopener noreferrer">
          Envy Labs
        </a>{' '}
        (before that,{' '}
        <a href="http://kmdg.com/" target="_blank" rel="noopener noreferrer">
          KMDG
        </a>
        ). I’ve also managed my own clientwork for most of my career. I share things I’ve learned on{' '}
        <a href="https://medium.com/@drew_powers" target="_blank" rel="noopener noreferrer">
          Medium
        </a>
        , and help contribute to{' '}
        <a href="https://github.com/dangodev/" target="_blank" rel="noopener noreferrer">
          Open Source
        </a>
        . In the past, I’ve preached the merits of design through{' '}
        <a href="http://orlandocreators.com" target="_blank" rel="noopener noreferrer">
          Orlando Creators
        </a>
        , and have mentored designers and developers through{' '}
        <a
          href="https://orlando.aiga.org/event/spot-showcase-2017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AIGA
        </a>{' '}
        and{' '}
        <a
          href="https://www.meetup.com/Front-End-Orlando/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front-end Orlando
        </a>
        .
      </p>
      <p>
        Some things I believe:
        <br />
        <br />
        1/ Good ideas should endure. Even if they’re old. Even if they’re not mine. 2/ Ideas without
        effort are worthless. 3/ Intentions don’t matter; impacts do. 4/ Everyone puts effort into
        something. Notice it and thank them. 5/ 
        <a
          href="http://sagmeisterwalsh.com/work/all/things-i-have-learned-in-my-life-so-far/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Honest people are always interesting
        </a>
        . 6/ Lasting relationships are built on making your intentions clear. 7/ Be kind.
        <br />
        <br />
        But enough about me.{' '}
        <a href="mailto:drew@pow.rs?subject=Hello%20Stranger">Tell me about you</a>!
      </p>
    </div>
    <h3 className={style.elsewhere}>Elsewhere</h3>
    <div className={style.links}>
      <a
        className={style.link}
        href="https://medium.com/@drew_powers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={medium} alt="Drew Powers on Medium" />
      </a>
      <a
        className={style.link}
        href="https://twitter.com/_drewpowers"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="Drew Powers on Twitter" />
      </a>
      <a
        className={style.link}
        href="https://github.com/dangodev"
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
      / PWA made possible by{' '}
      <a href="https://github.com/developit/preact-cli" target="_blank" rel="noopener noreferrer">
        Preact CLI
      </a>
    </div>
  </div>
);

export default About;
