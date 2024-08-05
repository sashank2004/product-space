import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar'
import Intro from './Components/Intro/intro'
import Placed from './Components/Placed/placed'
import Companies from './Components/Companies/companies'
import Placement from './Components/Placement/placement'
import Benefits from './Components/Benefits/benefits'
import Enroll from './Components/Enroll/enroll'
import Connect from './Components/Connect/connect'
import Newsletter from './Components/Newsletter/newsletter'
import Faqs from './Components/Faqs/faqs'
import End from './Components/End/end'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Placed/>
     <Companies/>
     <Placement/>
     <Benefits/>
     <Enroll/>
     <Connect/>
     <Newsletter/>
     <Faqs/>
     <End/>
    </div>
  );
}

export default App;
