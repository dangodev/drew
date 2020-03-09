import { h, Component } from 'preact';
import style from './style.css';

const Header = () => (
  <header className={style.header}>
    <h1>Drew Powers</h1>
    <a href="https://blog.pow.rs">Blog</a>
    <a href="https://blog.pow.rs/about">About</a>
  </header>
);

export default Header;
