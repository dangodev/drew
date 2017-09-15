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
            I’ve been designing and building web apps professionally both as a
            freelancer and through digital agencies since 2010. Since 2013, I’ve
            been a part of <a href="http://madewithenvy.com" target="_blank">Envy
            Labs</a>’ design team, working on large-scale applications
            like <a href="https://techrocket.com" target="_blank">Tech
            Rocket</a> and <a href="https://www.realthread.com" target="_blank">Real
            Thread</a>, as well as passion projects
            like <a href="http://orlandocreators.com">Orlando Creators</a>. I
            enjoy having some hand in every part of the process, from IA, to
            design, to prototyping, to front- and back-end dev. Though over
            the years I’ve found I’m most motivated when I get to design /
            animate / art direct, and see it through to execution.
          </p>
          <p>
            Since 2016 I’ve been a mentor in some fashion,
            through my <a href="https://orlando.aiga.org/event/spot-showcase-2017/" target="_blank">local
            AIGA chapter</a> and through
            organizing meetups
            like <a href="https://www.meetup.com/Front-End-Orlando/" target="_blank">Front-end
            Orlando</a>. I also enjoy outdoorsing with my lovely wife, Hillery,
            rock climbing, and seeing new places (also with Hillery;
            rock climbing is still growing on her). I’d like to write a comic
            book someday, but we’ll see how that goes.<br/>
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
          <a class={style.link} href="https://codepen.io/dangodev/pens/popular/" target="_blank">
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
