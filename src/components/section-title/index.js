import { h, Component } from 'preact';

import style from './style';

export default class CaseStudy extends Component {
  render() {
    return <h1 class={style.title}>{this.props.children}</h1>;
  }
}
