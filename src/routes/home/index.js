import { h } from 'preact'; // eslint-disable-line

import SectionTitle from '../../components/section-title';
import About from '../../components/about';
import CaseStudy from '../../components/case-study';

/* Assets */

import lkg1 from '../../assets/little-known-goods/little-known-goods-01.gif';
import lkg2 from '../../assets/little-known-goods/little-known-goods-02.gif';
import lkg3 from '../../assets/little-known-goods/little-known-goods-03.gif';
import lkg4 from '../../assets/little-known-goods/little-known-goods-04.gif';
import lkg5 from '../../assets/little-known-goods/little-known-goods-05.gif';
import lkg6 from '../../assets/little-known-goods/little-known-goods-06.gif';
import ln1 from '../../assets/lineage/lineage-01.gif';
import ln2 from '../../assets/lineage/lineage-02.gif';
import ln3 from '../../assets/lineage/lineage-03.jpg';
import ln4 from '../../assets/lineage/lineage-04.jpg';
import ln5 from '../../assets/lineage/lineage-05.jpg';
import ln6 from '../../assets/lineage/lineage-06.jpg';
import mn1 from '../../assets/manifold/manifold-01.gif';
import mn2 from '../../assets/manifold/manifold-02.gif';
import mn3 from '../../assets/manifold/manifold-03.gif';
import mn4 from '../../assets/manifold/manifold-04.jpg';
import mn5 from '../../assets/manifold/manifold-05.gif';
import mn6 from '../../assets/manifold/manifold-06.gif';
import ms1 from '../../assets/mamas-sauce/mamas-sauce-01.jpg';
import ms2 from '../../assets/mamas-sauce/mamas-sauce-02.jpg';
import ms3 from '../../assets/mamas-sauce/mamas-sauce-03.gif';
import ms4 from '../../assets/mamas-sauce/mamas-sauce-04.gif';
import ms5 from '../../assets/mamas-sauce/mamas-sauce-05.gif';
import ms6 from '../../assets/mamas-sauce/mamas-sauce-06.jpg';
import rt1 from '../../assets/real-thread/real-thread-01.gif';
import rt2 from '../../assets/real-thread/real-thread-02.gif';
import rt3 from '../../assets/real-thread/real-thread-03.gif';
import rt4 from '../../assets/real-thread/real-thread-04.jpg';
import rt5 from '../../assets/real-thread/real-thread-05.gif';
import rt6 from '../../assets/real-thread/real-thread-06.gif';
import cm1 from '../../assets/course-manager/course-manager-01.gif';
import cm2 from '../../assets/course-manager/course-manager-02.gif';
import cm3 from '../../assets/course-manager/course-manager-03.jpg';
import cm4 from '../../assets/course-manager/course-manager-04.jpg';
import cm5 from '../../assets/course-manager/course-manager-05.jpg';
import cm6 from '../../assets/course-manager/course-manager-06.jpg';

const Home = () => (
  <div>
    <SectionTitle>Selected Work</SectionTitle>
    <CaseStudy
      images={[lkg1, lkg2, lkg3, lkg4, lkg5, lkg6]}
      link="https://littleknowngoods.com"
      role="UX / Design / Dev"
      title="Little Known Goods"
    >
      <p></p>
    </CaseStudy>
    <CaseStudy
      images={[mn1, mn2, mn3, mn4, mn5, mn6]}
      link="https://manifold.co"
      role="Dev"
      title="Manifold"
    >
      <p>
        Manifold is creating a SaaS marketplace with Dashboards, APIs, and integration tools for any
        platform to launch their own SaaS marketplace with little time and effort. In a startup you
        wear many hats, and I had the privilege of leading the front-end engineering team, acted as
        Product Engineer, mentored, and was an Engineering People Manager for a stint. Oh, and
        always filling in interfaces with animations wherever I could [1/2/6].
      </p>
      <p>
        My journey started helping expand the Manifold Dashboard [4], building React interfaces for
        users to manage their services. As part of that, Nicole Tibaldi and I developed an
        interactive invoice breakdown using React + D3.js [3] (that sadly never got shipped). Other
        big projects included releasing an open-source, universal{' '}
        <a href="https://github.com/manifoldco/ui" target="_blank" rel="noopener noreferrer">
          Web Component library
        </a>{' '}
        (and{' '}
        <a href="https://ui.sandbox.manifold.co" target="_blank" rel="noopener noreferrer">
          docs
        </a>
        ). [5]
      </p>
      <p>
        My open-source contributions grew here as well, where we open-sourced everything reasonable,
        like{' '}
        <a
          href="https://github.com/manifoldco/swagger-to-ts"
          target="_blank"
          rel="noopener noreferrer"
        >
          swagger-to-ts
        </a>
        ,{' '}
        <a
          href="https://github.com/manifoldco/graphql-gen"
          target="_blank"
          rel="noopener noreferrer"
        >
          graphql-gen
        </a>{' '}
        , and
        <a
          href="https://github.com/manifoldco/react-scroll-agent"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-scroll-agent
        </a>
        .
      </p>
    </CaseStudy>
    <CaseStudy
      images={[ln1, ln2, ln3, ln4, ln5, ln6]}
      link="https://lineageroasting.com"
      role="UX / Design / Dev"
      title="Lineage Roasting"
    >
      <p>
        I can’t say enough about these lovely people that are changing the world with a roastery.
        The effort put into the quality, craft, and ethical practices to ensure every farmer they
        source from makes a fair living wage is inspiring. And others have taken notice, too—Lineage
        has won national roasting competitions and usually becomes everyone’s favorite roaster after
        discovering them.
      </p>
      <p>
        But I digress—this project was a lot of fun. I met with Jarret & Justine Johnson, the
        founders, and Ryan Wilcox, co-partner, to design and develop their new site. They run their
        business through Shopify, so this site had to tap into their store there which powers all
        their online sales and subscriptions. We also had to make sure their wholesale customers
        were taken care of.
      </p>
      <p>
        The little touches were fun, such as editing the video on the home page [1], writing brew
        guides [4], and creating an almost load-free experience through React, React Router, and
        Shopify’s new GraphQL API [2]. Custom admin sections also let Lineage add some unique
        touches like coffee notes and “roasting nerd data” [2] such as elevation and origin. And
        stunning photography from the award-winning{' '}
        <a href="https://dylonyork.com" target="_blank" rel="noopener noreferrer">
          Dylon York
        </a>{' '}
        really steals the spotlight on each page [4/5]. As far as client projects go, this is easily
        one of my all-time favorites. And I couldn’t have worked with nicer, more talented people.
      </p>
    </CaseStudy>
    <CaseStudy
      images={[ms1, ms2, ms3, ms4, ms5, ms6]}
      link="https://mamas-sauce.com"
      role="UX / Design / Dev"
      title="Mama’s Sauce"
    >
      <p>
        Who doesn’t love Mama? In 2015, Nick Sambrato contacted me with a better web vision for
        America’s favorite boutique spot printing company (according to an anecdotal poll). The old
        WordPress blog wasn’t cutting it, especially for the sales team that arguably spent more
        time giving clients free letterpress masterclasses than they did actually booking jobs. So
        after many, many conversations, we set out to build a better <strike>mousetrap</strike>{' '}
        quote form.
      </p>
      <p>
        Every part of Mama’s complex process was boiled down into a three-part funnel. First, force
        clients to browse printing to see what spot printing looks like. Second, see estimated cost
        [3] (this weeded out a large number of non-clients). Third, ask serious clients very
        specific questions about their project in a detailed quote form [4] (I love forms. They’re
        my favorite). This process was a great gut-check for clients to tell if they’re ready to
        submit. If not, they are pointed to the Design-wise™ section [5], an online brain dump of
        pretty much everything their sales team had grown tired of repeating.
      </p>
      <p>
        Visually, I pulled from early 20th century typographers and mid-century packaging to create
        a stripped-down, type-centric site that took a backseat to the vibrant photography [2] while
        subtly hinting at Mama’s top-notch precision. The result is a website that “gets out of the
        way” while you’re swept up by beautiful printing. In less artsy news, the site is a Ruby on
        Rails app with Vue.js front-end, custom CMS backend, and my family’s secret{' '}
        <a
          href="https://medium.com/@drew_powers/optimizing-mamas-sauce-s-beautiful-images-2b1705b5b4"
          target="_blank"
          rel="noopener noreferrer"
        >
          image optimization recipe
        </a>{' '}
        for low data usage.
      </p>
    </CaseStudy>
    <CaseStudy
      images={[rt1, rt2, rt3, rt4, rt5, rt6]}
      link="https://www.realthread.com"
      role="UX / Dev"
      title="Real Thread"
    >
      <p>
        Real Thread reached out to Envy Labs in 2015 to alleviate some growing pains. When they
        approached us, their current quote form was nothing more than an email submit form that
        piled into a sizeable stack of potential orders. Employees sometimes took days to reply with
        an estimate and mocked-up artwork, at which point many clients moved on to a quicker
        printer. Assuming the client stuck around, the approval and revision process only
        exacerbated and dragged out each order, resulting in a slow and frustrating process on both
        ends.
      </p>
      <p>
        After many in-person meetings (local clients are great for that), we examined the entire
        customer shopping experience of getting shirts printed, from different personas ranging from
        novice “family gathering tee” client to professional designer client, making sure the
        psychology and priorites of their key demos were met. The result was a pretty slick
        automated quote generator [3] powered by Salesforce. Drew Smith (freelancer) handled the
        major design and art direction for the project, while I provided UX consultation [4] and
        filled in missing design details and animations.
      </p>
      <p>
        Customers could now not only get an instant quote—boosting Real Thread into a new online
        retail level—but also better manage their order through the whole process [5]. And the new
        site performed faster than their old one by a longshot. The project, completed over 4
        months, doubled Real Thread’s customer throughput with no work/staff changes on their part,
        and dramatically improved customer satisfaction.
      </p>
    </CaseStudy>
    <CaseStudy
      images={[cm1, cm2, cm3, cm4, cm5, cm6]}
      role="UX / Design / Dev"
      title="Course Manager"
    >
      <p>
        Course Manager has a long history too boring to tell, and it rightly holds a special place
        in my heart. Envy Labs built the second version of a project called CentreLearn, which
        became a major player in the firefighter & EMT e-training space (which is a userbase that
        hates taking these training courses, which in itself is a very rewarding design challenge to
        overcome, but I digress). Along with this very specific niche came years of domain knowledge
        and navigating the complex regulations that surround it all. CentreLearn was doing well
        until one competitor bought up the entire space, CentreLearn included. Fortunately, Envy
        Labs stayed on to work with the new platform, and I got to reimagine everything from
        scratch.
      </p>
      <p>
        I lead the design on the project that would now serve tens of thousands of firefighters,
        EMTs, and other public servants across the country. Ayana Campbell Smith (Envy Labs) aided
        design, as did Jacob Swanner (Envy Labs) with domain knowledge and sanity checks. We ended
        up building a modular design language [3/4] that could be torn apart and rearranged into
        myriad ways to meet their rapidly-evolving business needs in modern public service
        curriculum. I typeset the UI in TFJ’s Mallory/Mallory Microplus [5], a humanist family that
        shines when it comes to readability. A huge part of this app was readability for the “old
        dogs” being forced to learn “new tricks” (aka the Internet).
      </p>
      <p>
        I explain all that because it’s tough to describe this platform in only a few screens, but
        we built and handed off the project in 2017. As of now, the client pivoted on the project
        and assumed ownership over the design and dev work we provided. While it’s uncertain what
        the final version of the system will look like once out of our hands, I’m still really proud
        of this project and the thought and attention put into it.
      </p>
    </CaseStudy>
    <SectionTitle>About</SectionTitle>
    <About />
  </div>
);

export default Home;
