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
        I’ve been a designer and builder of the Web since 2010, both through
        managing my own clients as well as working for digital agencies. I’m
        currently a Senior Frontend Engineer at{' '}
        <a href="https://manifold.co" target="_blank" rel="noopener noreferrer">
          Manifold
        </a>, helping to build the world’s biggest independent cloud
        marketplace. Previously, I was creating large-scale design systems and
        front-end architecture for web apps through{' '}
        <a
          href="http://madewithenvy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Envy Labs
        </a>. I share things I’ve learned on{' '}
        <a
          href="https://medium.com/@drew_powers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>, and I promote our local design heroes through{' '}
        <a
          href="http://orlandocreators.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Orlando Creators
        </a>. I also enjoy mentoring younger designers and developers through
        things like{' '}
        <a
          href="https://orlando.aiga.org/event/spot-showcase-2017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Orlando AIGA
        </a>{' '}
        and organizing meetups like{' '}
        <a
          href="https://www.meetup.com/Front-End-Orlando/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Front-end Orlando
        </a>. Recently I’ve been passionate about learning 3D (<a
          href="https://codepen.io/dangodev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>{' '}
        |{' '}
        <a
          href="https://dribbble.com/shots/3728388-Dribbbpill"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>) and{' '}
        <a
          href="https://speakerdeck.com/dangodev/virtual-and-augmented-reality"
          target="_blank"
          rel="noopener noreferrer"
        >
          VR/AR
        </a>, trying to understand how both fit better into the Web.
      </p>
      <p>
        Some things I believe:
        <br />
        <br />
        1/ Good design and ideas should endure. Even if they’re old. Even if
        they’re not mine. 2/ Just because something is true doesn’t mean it’s
        helpful. 3/ <a
          href="http://99percentinvisible.org/article/least-resistance-desire-paths-can-lead-better-design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pave desire paths
        </a>. 4/ Hype is always useful—either as a wave to ride, or an
        opportunity to observe. 5/ <a
          href="http://sagmeisterwalsh.com/work/all/things-i-have-learned-in-my-life-so-far/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Honest people are always interesting
        </a>. 6/ Just say what you want—in{' '}
        <a
          href="https://hackernoon.com/for-the-love-of-god-please-tell-me-what-your-company-does-c2f0b835ab92"
          target="_blank"
          rel="noopener noreferrer"
        >
          design
        </a>{' '}
        and life. 7/ Be kind.
        <br />
        <br />
        But enough about me.{' '}
        <a href="mailto:drew@pow.rs?subject=Hello%20Stranger">
          Tell me about you
        </a>!
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
      <a
        href="https://github.com/developit/preact-cli"
        target="_blank"
        rel="noopener noreferrer"
      >
        Preact CLI
      </a>
    </div>
  </div>
);

export default About;
