import Topbar from './componants/topbar/Topbar'
import Intro from './componants/intro/Intro'
import Portfolio from './componants/portfolio/Portfolio'
import Testimonial from './componants/testimonial/Testimonial'
import Work from './componants/work/Work'
import Contact from './componants/contact/Contact'
import './app.scss'
//import {sections} from'./app.scss'

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
aaa
        
      </div>
    </div>
  );
}

export default App;
