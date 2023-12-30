 
import './App.css';
import Navbar from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Destination from './components/Destination';
import Category from './components/Category';


import Destination1 from './components/Destination1';
import Destination2 from './components/Destination2';
import Destination3 from './components/Destination3';
import Destination4 from './components/Destination4';
import Destination5 from './components/Destination5';
import Details from './components/Details';
import Details3 from './components/Details3';
import Details4 from './components/Details4';
import Details5 from './components/Details5';
import Details6 from './components/Details6';
import Details2 from './components/Details2';
import Details1 from './components/Details1';
import Details7 from './components/Details7';
import Details8 from './components/Details8';
import Details9 from './components/Details9';
import Details10 from './components/Details10';

import Form from './components/Form';
import Contactform from './routes/Contactform';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/Destination' element={<Destination />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/Destination1' element={<Destination1 />}/>
        <Route path='/Destination2' element={<Destination2 />}/>
        <Route path='/Destination3' element={<Destination3 />}/>
        <Route path='/Destination4' element={<Destination4 />}/>
        <Route path='/Destination5' element={<Destination5 />}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/details1' element={<Details1/>}/>
        <Route path='/details2' element={<Details2/>}/>
        <Route path='/details3' element={<Details3/>}/>
        <Route path='/details4' element={<Details4/>}/>
        <Route path='/details5' element={<Details5/>}/>
        <Route path='/details6' element={<Details6/>}/>
        <Route path='/details7' element={<Details7/>}/>
        <Route path='/details8' element={<Details8/>}/>
        <Route path='/details9' element={<Details9/>}/>
        <Route path='/details10' element={<Details10/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/contactform' element={<Contactform/>}/>
        
      </Routes>
        
     
    </div>
  );
}

export default App;
