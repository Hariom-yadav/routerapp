import {Route,Routes} from 'react-router-dom'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Supports from './components/Supports';
import About from './components/About';
import Labs from './components/Labs';
import MainHeader from './components/MainHeader';
import NotFound from './components/NotFound';
import { NavLink} from 'react-router-dom';

// const router = createBrowserRouter(
//   [
//     { path: "/", element:<Home />  }, // Redirect to "/login"
//     { path: "/About", element: <About /> },
//     { path: "/Home", element: <Home /> },
//     { path: "/Labs", element: <Labs /> },
//     { path: "/Supports", element: <Supports /> },
//     { path: "*", element: <NotFound /> }, // Fallback for unknown routes
//   ],
//   {
//     future: {
//       v7_relativeSplatPath: true, // Enables relative paths in nested routes
//       v7_fetcherPersist: true,   // Retains fetcher state during navigation
//       v7_normalizeFormMethod: true, // Normalizes form methods (e.g., POST or GET)
//       v7_partialHydration: true, // Supports partial hydration for server-side rendering
//       v7_skipActionErrorRevalidation: true, // Prevents revalidation when action errors occur
//     },
//   }
// );

// function App() {
//   return (
//     <RouterProvider
//       future={{ v7_startTransition: true }} // Enables React's startTransition API
//       router={router}
//     />
//   );

function App() {
  return (
    <div className="App">

    <div>

    <nav>
             <ul>
                  <div>
                  <NavLink to="/" >Home</NavLink>
                  </div>
                  
                  <div>
                  <NavLink to="/support" >Support</NavLink>
                  </div>

                  <div>
                  <NavLink to="/about" >About</NavLink>
                  </div>
                  
                  <div>
                  <NavLink to="/lab" >Labs</NavLink>
                  </div>
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
