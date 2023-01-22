import React, { useEffect, useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

import "../Assets/Style/ReadBlog/readblog.css";

import { db, auth } from "../firebaseConfig";
import { collection, getDocs , deleteDoc , doc} from "firebase/firestore";


const Readpost = () => {
    const [Data, setData] = useState([]);
    const userCollection = collection(db, "blog");
  
    const {googleLogin,updateData}=useContext(LoginContext);
    const navigate=useNavigate();
    const getdata = async () => {
        const data = await getDocs(userCollection);
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    useEffect(() => {
        getdata();
    }, []);

    const deleteData = async (id)=>{
        const userDoc=doc(db,"blog",id);
        await deleteDoc(userDoc);
        getdata();
    }
    
    const updatePost =(id)=>{
        Data.map((data)=>{
            if(id===data.id){
                updateData.author=data.author;
                updateData.blog=data.blog;
                updateData.title=data.title;
                updateData.i_d=data.id;
                updateData.tigger=1;
                console.log(updateData.tigger);
                navigate("/write");

            }
        })
    }
    
    return (
        <React.Fragment>
            <div className="ReadPost">
                {
                    Data.map((data) => {
                        return (
                            <React.Fragment>
                                <div className="Card">
                                    <div className="Heading">
                                        <h1>{data.title}</h1>
                                        {
                                           googleLogin && data.userId===auth.currentUser.uid ? 
                                            (<React.Fragment>
                                                <button onClick={()=>{deleteData(data.id);}}>🗑️</button>
                                                <button onClick={()=>{updatePost(data.id);}}>🖊️</button>
                                            </React.Fragment>)
                                            :
                                            (<React.Fragment>

                                            </React.Fragment>)
                                        }
                                    </div>
                                    <div className="Content">
                                        <p>{data.blog}</p>
                                    </div>
                                    <div className="Author">
                                        <i>~{data.author}</i>
                                    </div>  
                                </div>
                            </React.Fragment>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Readpost;