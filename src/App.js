import { BrowserRouter,Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Subscriptions from "./pages/Subscriptions";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { CLIENT_ID } from "./constants/credentials";
import { useState } from "react";


export default function App() {
  // const [logindata,setLoginData] = useState(
  //   localStorage.getItem('loginData')
  //   ?JSON.parse(localStorage.getItem('loginData'))
  //   :null
  // );
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    // setLoginData(null)
}
  
  useEffect (() =>{
    function start(){
      gapi.client.init({
        clientId:CLIENT_ID,
        scope:"",
      })
    };
    gapi.load('client:auth2', start);
  });
  return (
    <BrowserRouter>
    <Routes>
     
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/subscriptions" element={<Subscriptions/>} />
        <Route path="signup" element={<Signup/>} />
    
        </Routes>
        {/* {(1>2) ? (<Dashboard/>) :(<Login/>)} */}

    </BrowserRouter>
  );
}

const styles = {
  container: {
    height: "100%",
    width: "100%",
  },
};
