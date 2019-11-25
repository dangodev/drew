import { h } from 'preact';

import Header from './header';
import Hero from './hero';

import Home from '../routes/home';

const App = () => (
  <div id="app">
    <Header />
    <Hero />
    <Home />
  </div>
);

export default App;
