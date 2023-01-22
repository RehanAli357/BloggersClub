import React, { useState } from "react";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import Readpost from "./Components/Readpost";
import WritePost from "./Components/WritePost";
import {Route,Routes} from "react-router-dom";
import LoginContext from "./Context/LoginContext";

const App =()=>{
  const [googleLogin,setgoogleLogin]=useState(false);
  const [updateData,setupdateData]=useState({
    author:"",
    title:"",
    blog:"",
    i_d:"",
    tigger:0,
});
  return(

    <React.Fragment>
      <LoginContext.Provider value={{googleLogin,setgoogleLogin,setupdateData,updateData}}>
      <NavigationBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/read" element={<Readpost/>}/>
        <Route exact path="/write" element={<WritePost/>}/>
      </Routes>
      </LoginContext.Provider>
    </React.Fragment>
  );
}

export default App;
