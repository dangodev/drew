import { h, Component } from 'preact';

import style from './style.css';

export default class CaseStudy extends Component {
  render() {
    return <h1 className={style.title}>{this.props.children}</h1>;
  }
}
