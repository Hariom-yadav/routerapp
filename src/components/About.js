import React from 'react'
import { useNavigate } from 'react-router-dom';

 const About = () => {
    const navigate = useNavigate();
    function navigatehandler(){
        navigate("/");
    }
  return (
    <div>
        <div>THIS IS ABOUT PAGE</div>
        <button onClick={navigatehandler}>Go-TO Home Page</button>
    </div>
    
  )
}
export default About;