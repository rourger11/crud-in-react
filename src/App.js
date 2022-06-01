import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Homepage/Home';
import { BrowserRouter,Routes,Route,} from 'react-router-dom'
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';
import Userdetail from './Components/User/Userdetail';
import Newuser from './Components/User/Newuser';
import Edituser from './Components/User/Edituser';




function App() {
  return (
    <>
    <div>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route index element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Newuser' element={<Newuser />} />
      <Route path='/edit/:Id' element={<Edituser />} />
      <Route path='/Userdetail/:id' element={<Userdetail />} />
      <Route path='/*' element={<Notfound />} />

    </Routes>
    </BrowserRouter>

</div>
   </>
  );
}

export default App;
