import './App.scss';
import Contact from './components/contact/Contact';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Skills from './components/skills/Skills'
import Testimonials from './components/testimonials/Testimonials'
import Aboutme from './components/aboutme/Aboutme';
import Menu from './components/menu/Menu';
import Blog from './components/blog/Blog';
import Sections from './Sections';
import { useState } from 'react';
import Chat from './components/chat/Chat';

function App() {
  const [openMenu, setOpenMenu] = useState(false);


  return (
    <div className="app">
      <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="sections">

        <Intro />
        <Aboutme />
        <Portfolio />
        <Works />
        <Skills />
        <Contact />

      </div>
      <Chat/>
      



    </div>
    
  );
}

export default App;
