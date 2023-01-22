import React , { useContext } from "react";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
import LoginContext from "../Context/LoginContext";
import "../Assets/Style/Home/home.css";




const Home = () => {
    const {googleLogin}=useContext(LoginContext);
    const navigate=useNavigate();
    const WriteBlogs=()=>{
      if(googleLogin===true){
        navigate("/write");
      }
      else{
        alert("Please Login To Write");
      }
    }
    return (
        <React.Fragment>
            <div className="Home">
                <div className="Quote">
                    <h1>
                        "Every time you post something online, you have a choice.
                        You can either make it something that adds to the happiness
                        levels in the world—or you can make it something that takes away." 
                        <span>~Zoe Sugg</span>
                    </h1>
                </div>
            </div>
            <div className="HomeButton">
                <button onClick={WriteBlogs}>Write Blog</button> <p>to share your thoughts with the world.</p> 
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Home;