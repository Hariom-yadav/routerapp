import {Route,Routes} from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Supports from './components/Supports';
import About from './components/About';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader';
import NotFound from './components/NotFound';
import { NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">

    <div>

    <nav>
             <ul>
                  <li>
                  <NavLink to="/" >Home</NavLink>
                  </li>
                  
                  <li>
                  <NavLink to="/support" >Support</NavLink>
                  </li>

                  <li>
                  <NavLink to="/about" >About</NavLink>
                  </li>
                  
                  <li>
                  <NavLink to="/lab" >Labs</NavLink>
                  </li>
            </ul>
    </nav>
           
                 

            

            <Routes>
                      <Route path="/" element={<MainHeader/>} >
                            <Route index element={<Home/>}/>
                            <Route path="/support" element={<Supports/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/lab" element={<Labs/>} />
                            <Route path="*" element={<NotFound/>} />
                      </Route>
          
          
          </Routes>
    </div>


   

    </div>
  );
}

export default App;
