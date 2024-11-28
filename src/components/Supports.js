import React from 'react';
import { useNavigate } from 'react-router-dom';

 const Support = () => {
 
    
  const navigate = useNavigate();
    function navigatehandler(){
        navigate("/");
    }
    function backHandler(){
      navigate(-1);
    }
  return (
    <div>
       <div>THIS IS SUPPORT PAGE</div>
 
        <button onClick={navigatehandler}>Go-TO Home Page</button>
        <button onClick={backHandler}>Go Back</button>
    </div>
    
  )
}
export default Support;