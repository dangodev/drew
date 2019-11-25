import { h } from 'preact';

import style from './style.css';

const SectionTitle = ({ children }) => <h1 className={style.title}>{children}</h1>;

export default SectionTitle;
