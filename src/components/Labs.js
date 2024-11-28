import React from 'react'
import { useNavigate } from 'react-router-dom';
 const Labs = () => {

  const navigate = useNavigate();
  function navigatehandler(){
      navigate("/");
  }
return (
  <div>
      <div>THIS IS LABS PAGE</div>
      <button onClick={navigatehandler}>Go-TO Home Page</button>
  </div>
  
)
}
export default Labs;