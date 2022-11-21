import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Education from './components/education';
import Certification from './components/certificate';
import Project from './components/project';
import Contact from './components/contact';
import Resume from './components/resume';
import Footer from './components/footer';
import Error404 from './components/404';
import Allcertificate from './components/allcertificate';

const App = () => {
  return ( 
    <div className="App">
      
      <div className="mainroute">
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path='/certificate' element={<Certification/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='*' element={<Error404/>}/>
        <Route path='/allcertificate' element={<Allcertificate/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
       </div>
    </div>
   );
}
 
export default App;

