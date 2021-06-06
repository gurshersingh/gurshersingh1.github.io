import Topbar from './componants/topbar/Topbar'
import Intro from './componants/intro/Intro'
import Portfolio from './componants/portfolio/Portfolio'
import Testimonial from './componants/testimonial/Testimonial'
import Work from './componants/work/Work'
import Contact from './componants/contact/Contact'
import './app.scss'
import { useState } from 'react'
import Menu from './componants/menu/Menu'
//import {sections} from'./app.scss'

function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>

        
      </div>
    </div>
  );
}

export default App;
