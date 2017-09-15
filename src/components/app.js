import { h, Component } from 'preact';

import About from './about';
import CaseStudy from './case-study';
import Header from './header';
import Hero from './hero';
import SectionTitle from './section-title';

/* Assets */

import ms1 from '../assets/mamas-sauce/mamas-sauce-01.jpg';
import ms2 from '../assets/mamas-sauce/mamas-sauce-02.jpg';
import ms3 from '../assets/mamas-sauce/mamas-sauce-03.gif';
import ms4 from '../assets/mamas-sauce/mamas-sauce-04.gif';
import ms5 from '../assets/mamas-sauce/mamas-sauce-05.gif';
import ms6 from '../assets/mamas-sauce/mamas-sauce-06.jpg';
import rt1 from '../assets/real-thread/real-thread-01.gif';
import rt2 from '../assets/real-thread/real-thread-02.gif';

export default class App extends Component {

  /** Gets fired when the route changes.
   *  @param {Object} event    "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url  The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        {/* <Hero /> */}
        <SectionTitle>Selected Work</SectionTitle>
        <CaseStudy
          images={[ms1, ms2, ms3, ms4, ms5, ms6]}
          title="Mama’s Sauce"
          link="http://mamas-sauce.com"
          role="UX / Design / Dev"
        >
        <p>
          Mama’s Sauce was in her seventh year, give or take, and had grown
          from a scrappy three-man print shop into designers’ favorite
          boutique printer the nation over. The old WordPress blog wasn’t
          cutting it, so in 2015, Nick Sambrato reached out to me to develop
          a better customer experience (we did) and the largest online
          database of printing (it is as far as I know).
        </p>
        <p>
          Pulling from early 20th century typographers Piet Zwart and Jan
          Tschold, I designed a “boring” site with gridlines that took a
          backseat to the vibrant photography [2]. The result is a website
          that “gets out of the way” while you’re swept up by beautiful
          printing. The gridlines also suggest Mama’s Sauce’s incredible
          precision while printing (seriously—their registration is insane!)
        </p>
        <p>
          Getting a quote from Mama’s Sauce went from nightmare to a
          hand-held process [4], with the site estimating what similar jobs cost.
          You can also browse all their printwork by search term or print
          process [3], or you can learn in their Design-Wise encyclopedia of
          print knowledge [5]. The site is a Ruby on Rails app with Vue.js
          front-end, and on-the-fly image optimization for low data usage.
        </p>
        </CaseStudy>
        <CaseStudy
          images={[
            require('../assets/real-thread/real-thread-01.gif'),
            require('../assets/real-thread/real-thread-02.gif'),
            '//placecage.com/800/800',
            '//placecage.com/800/800',
            '//placecage.com/800/800',
            '//placecage.com/800/800',
          ]}
          title="Real Thread"
          link="https://www.realthread.com"
          role="UX / Dev"
        >
        <p>
          Real Thread reached out to Envy Labs in 2015 to automate their
          manual quote process. A client had to fill out an email form and
          has to wait for days before an employee could reply with a price
          estimate and mocked-up artwork. The entire process was slow and
          frustrating on both ends, even more so when the customer said “no
          thanks.”
        </p>
        <p>
          In building a real-time quote generator, Drew Smith handled the
          major design and art direction for the project, while I managed UX
          and provided design details and animations for app. I built the
          front-end of the site to serve a rich, interactive, live-quoting
          experience [2] with little wait time thanks to optimized images.
        </p>
        <p>
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
        </p>
        </CaseStudy>
        <CaseStudy
          images={[
            '//placecage.com/800/800',
            '//placecage.com/800/800',
            '//placecage.com/800/800',
            '//placecage.com/800/800',
            '//placecage.com/800/800',
            '//placecage.com/800/800',
          ]}
          title="Course Manager"
          role="UX / Design / Dev"
        >
        <p>
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
        </p>
        <p>
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
        </p>
        <p>
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
          It all started long ago.
        </p>
        </CaseStudy>
        <SectionTitle>About</SectionTitle>
        <About />
      </div>
    );
  }
}
