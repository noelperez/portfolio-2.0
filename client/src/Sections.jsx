
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

function Sections() {
  return (
    <div className="sections">
    <Intro/>
    <Aboutme />
    <Portfolio/>
    <Works/>
    <Skills />
    <Contact/>
  </div>
  )
}

export default Sections
