import { h, Component } from 'preact';
import Matter from 'matter-js';

import SVGPathSegPolyfill from '../../lib/pathseg';

import style from './style.css';

/* Assets */
import wordsSVG from '../../assets/words.svg.txt';

const prod = process.env.NODE_ENV === 'production';
const D = prod ? require('../../assets/big-d.png') : '/assets/big-d.png';
const F = prod ? require('../../assets/big-f.png') : '/assets/big-f.png';
const U = prod ? require('../../assets/big-u.png') : '/assets/big-u.png';
const d = prod ? require('../../assets/little-d.png') : '/assets/little-d.png';
const e = prod ? require('../../assets/little-e.png') : '/assets/little-e.png';
const g = prod ? require('../../assets/little-g.png') : '/assets/little-g.png';
const n = prod ? require('../../assets/little-n.png') : '/assets/little-n.png';
const o = prod ? require('../../assets/little-o.png') : '/assets/little-o.png';
const p = prod ? require('../../assets/little-p.png') : '/assets/little-p.png';
const r = prod ? require('../../assets/little-r.png') : '/assets/little-r.png';
const s = prod ? require('../../assets/little-s.png') : '/assets/little-s.png';
const t = prod ? require('../../assets/little-t.png') : '/assets/little-t.png';
const u = prod ? require('../../assets/little-u.png') : '/assets/little-u.png';
const v = prod ? require('../../assets/little-v.png') : '/assets/little-v.png';

const textures = [
  U, null, D, e, s, null, null, g, n, e, r,
  F, r, o, n, t, null, e, n, d, D, e, v, e, null, o, p, e, r,
  F, null, null, g, u, r, e, r, null, o, u, t, e, r,
];

export default class Hero extends Component {
  constructor(props) {
    super(props);

    this.state = {
      engine: {},
    };
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      [D, F, U, d, e, g, n, o, p, r, s, t, u, v].forEach((letter) => {
        (new Image()).src = letter;
      });
    }
    SVGPathSegPolyfill();
    this.setState({
      engine: Matter.Engine.create(),
    });
  }

  componentDidMount() {
    const engine = this.state.engine;
    const render = Matter.Render.create({
      element: document.querySelector('#matter-canvas'),
      engine,
      options: {
        background: 'transparent',
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio || 1,
        width: window.innerWidth,
        wireframes: false,
      },
    });

    window.scrollY >= 4
      ? this.state.engine.world.gravity.scale = -0.0001
      : this.state.engine.world.gravity.scale = 0;

    const scale = 1.3;
    const textureScale = 0.31;
    const xStart = 300;
    const yStart = 40;

    const words = document.createElement('div');
    words.style.left = 0;
    words.style.pointerEvents = 'none';
    words.style.position = 'absolute';
    words.style.top = 0;
    words.style.visibility = 'hidden';
    document.body.appendChild(words);
    words.innerHTML = wordsSVG;
    words.querySelectorAll('path').forEach((pathEl, i) => {
      const bb = pathEl.getBoundingClientRect();
      const renderOptions = textures[i] === null
        ? { fillStyle: '#000' }
        : { fillStyle: 'transparent', sprite: {
          texture: textures[i],
          xScale: textureScale,
          xOffset: 0,
          yScale: textureScale,
          yOffset: 0.0005 * bb.height,
        } };
      Matter.World.add(
        this.state.engine.world,
        Matter.Bodies.fromVertices(
          (bb.left + bb.width / 2) * scale + xStart,
          (bb.top + window.scrollY + (bb.height / 2)) * scale + yStart,
          Matter.Vertices.scale(Matter.Svg.pathToVertices(pathEl), scale, scale),
          { render: renderOptions }
        )
      );
    });

    Matter.World.add(
      this.state.engine.world,
      Matter.Bodies.rectangle(window.innerWidth/2, -60, window.innerWidth, 120, {
        render: { fillStyle: '#fff' }, isStatic: true,
      })
    );
    Matter.Engine.run(this.state.engine);
    Matter.Render.run(render);

    const scrollHandler = () => {
      this.state.engine.world.gravity.scale = -0.0001;
      window.removeEventListener('scroll', scrollHandler);
      setTimeout(() => Matter.Render.stop(render), 15000);
    };

    if (this.state.engine.world.gravity.scale === 0) {
      window.addEventListener('scroll', scrollHandler);
    }
  }

  render() {
    return (
      <div id="matter-canvas" class={style.hero}></div>
    );
  }
}
