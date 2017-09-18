import { h, Component } from 'preact';

import style from './style';

import drew from '../../assets/drew1.jpg';

import codepen from '../../assets/codepen.svg';
import dribbble from '../../assets/dribbble.svg';
import github from '../../assets/github.svg';
import medium from '../../assets/medium.svg';
import twitter from '../../assets/twitter.svg';

export default class About extends Component {
  render() {
    return (
      <div class={style.about}>
        <div class={style.photowrapper}>
          <img class={style.photo} src={drew} />
        </div>
        <div class={style.text}>
          <p>
            I’ve been a designer and builder of the Web since 2010,
            both through managing my own clients as well as working for
            digital agencies. Since 2013, I’ve focused on large-scale design
            systems and front-end architecture for web apps
            through <a href="http://madewithenvy.com" target="_blank">Envy
            Labs</a>. I share things I’ve learned
            on <a href="https://medium.com/@drew_powers"
            target="_blank">Medium</a>, and I promote our local design heroes
            through <a href="http://orlandocreators.com" target="_blank">Orlando
            Creators</a>. I also enjoy mentoring younger designers and developers
            through things like <a
            href="https://orlando.aiga.org/event/spot-showcase-2017/"
            target="_blank">Orlando
            AIGA</a> and organizing meetups
            like <a href="https://www.meetup.com/Front-End-Orlando/"
            target="_blank">Front-end
            Orlando</a>.             Recently I’ve been passionate about learning 3D
            (<a href="https://codepen.io/dangodev/" target="_blank">CodePen</a> | <a
            href="https://dribbble.com/shots/3728388-Dribbbpill"
            target="_blank">Dribbble</a>) and <a
            href="https://speakerdeck.com/dangodev/virtual-and-augmented-reality"
            target="_blank">VR/AR</a>, trying to understand how both fit better
            into the Web.
          </p>
          <p>
            Some things I believe:
            <br/>
            <br/>
            1/ Good design and ideas should endure. Even if they’re old. Even
            if they’re not mine.
            2/ Just because something is true doesn’t mean it’s helpful (stolen quote).
            3/ <a href="http://99percentinvisible.org/article/least-resistance-desire-paths-can-lead-better-design/"
            target="_blank">Pave desire paths</a>.
            4/ Hype is always useful—either as a wave to ride, or an
            opportunity to observe.
            5/ Honest people are always interesting (also <a
            href="http://sagmeisterwalsh.com/work/all/things-i-have-learned-in-my-life-so-far/"
            target="_blank">stolen</a>).
            6/ Just say what you want—in <a
            href="https://hackernoon.com/for-the-love-of-god-please-tell-me-what-your-company-does-c2f0b835ab92"
            target="_blank">design</a> and life.
            7/ Be kind.
            <br/>
            <br/>
            But enough about me. <a href="mailto:drew@pow.rs?subject=Hello%20Stranger">Tell me about you</a>!
          </p>
        </div>
        <h3 class={style.elsewhere}>Elsewhere</h3>
        <div class={style.links}>
          <a class={style.link} href="https://medium.com/@drew_powers" target="_blank">
            <img src={medium} alt="Drew Powers on Medium"/>
          </a>
          <a class={style.link} href="https://twitter.com/_drewpowers" target="_blank">
            <img src={twitter} alt="Drew Powers on Twitter"/>
          </a>
          <a class={style.link} href="https://github.com/dangodev" target="_blank">
            <img src={github} alt="Drew Powers on GitHub"/>
          </a>
          <a class={style.link} href="https://codepen.io/dangodev/" target="_blank">
            <img src={codepen} alt="Drew Powers on CodePen"/>
          </a>
          <a class={style.link} href="https://dribbble.com/drewpowers" target="_blank">
            <img src={dribbble} alt="Drew Powers on Dribbble"/>
          </a>
        </div>
        <div class={style.colophon}>
          Set in Cardinal Grotesque by <a href="https://www.verycoolstudio.com/shop/cardinal-grotesque/" target="_blank">Very Cool Studio</a> /
          PWA made possible by <a href="https://github.com/developit/preact-cli" target="_blank">Preact CLI</a>
        </div>
      </div>
    );
  }
}
