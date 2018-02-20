import { h, Component } from 'preact';
import style from './style.css';

export default class Header extends Component {
  render() {
    return (
      <header className={style.header}>
        <h1>Drew Powers</h1>
      </header>
    );
  }
}
