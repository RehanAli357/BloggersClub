import React, { useContext, useState } from "react";
import LoginContext from "../Context/LoginContext";
import { NavLink, useNavigate } from "react-router-dom";
import MobNav from "../Assets/Images/menu.png";
import "../Assets/Style/NavigationBar/navigation.css";

import { auth, provider } from "../firebaseConfig";
import { signInWithPopup, signOut } from "firebase/auth";

const NavigationBar = () => {
    const [transform,settransform]=useState("translate(-100%)");
    const { setgoogleLogin, googleLogin } = useContext(LoginContext);
    const navigate = useNavigate();
    const Login = () => {
        signInWithPopup(auth, provider).then(() => {
            setgoogleLogin(true);
            navigate("/");
            localStorage.setItem("googleLogin", true);
        })
    }
    const SideMenu =()=>{
        if(transform==="translate(-100%)"){
            settransform("translate(0%)")
        }
        else if(transform==="translate(0%)"){
            settransform("translate(-100%)")
        }
    }
    const CloseSide =()=>{
        SideMenu();
    }
    const LogOut = () => {
        signOut(auth).then(() => {
            navigate("/");
            setgoogleLogin(false);
            localStorage.setItem("googleLogin", false);
            localStorage.removeItem("googleLogin");
        })
    }

    return (
        <React.Fragment>
            <nav>
                <h1>Blogger'sClub</h1>
                <div className="NavContent">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/read">Read Blog</NavLink>

                    {
                        !googleLogin ? (<button style={{ position: "absolute", right: "2em", top: "25%" }} onClick={Login}>Login</button>) : (
                            <React.Fragment>
                                <NavLink to="/write">Write Blog</NavLink>
                                <img src={auth.currentUser.photoURL} alt="img" />
                                <button onClick={LogOut}>LogOut</button>
                            </React.Fragment>
                        )
                    }
                </div>
                <div className="MobNav">
                        <button onClick={SideMenu}><img src={MobNav} alt="mobile Menu" /></button>
                    </div>
                    <div className="MobNavContent"  style={{transform:transform,transition:"0.3s"}}>
                        {
                            !googleLogin ? <></>: <img src={auth.currentUser.photoURL} alt="userpic" />
                        }
                        <NavLink onClick={CloseSide} to="/">Home</NavLink>
                        <NavLink onClick={CloseSide} to="/read">Read Blog</NavLink>
                        {
                            !googleLogin ? <button onClick={Login}>Login</button> : (<React.Fragment>
                                <NavLink onClick={CloseSide} to="/write">write Blog</NavLink>
                                <button onClick={LogOut}>LogOut</button>
                            </React.Fragment>)
                        }
                    </div>
            </nav>
        </React.Fragment>
    );
}

export default NavigationBar;
