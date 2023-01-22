import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Style/WriteBlog/writeblog.css";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import LoginContext from "../Context/LoginContext";
const WritePost = () => {
    const [author, setauthor] = useState("");
    const [title, settitle] = useState("");
    const [blog, setblog] = useState("");
    const userCollection = collection(db, "blog");
    const navigate = useNavigate();
    const { googleLogin, updateData, setupdateData } = useContext(LoginContext);

    useEffect(() => {
        if (googleLogin === false) {
            navigate("/");
        }
        if (updateData.tigger === 1) {
            settitle(updateData.title);
            setauthor(updateData.author);
            setblog(updateData.blog);
        }
    }, []);

    const AddPost = async (e) => {
        if (author === "" && blog === "" && title === "") {
            alert("Enter the Data");
        }
        else {
            e.preventDefault();
            await addDoc(userCollection, { title, blog, author, userId: auth.currentUser.uid });
            navigate("/read");
            setauthor("");
            setblog("");
            settitle("");
        }

    }

    const updatePost = async () => {
        const userDoc = doc(db, "blog", updateData.i_d);
        const updateField = { blog: blog, title: title, author: author };
        await updateDoc(userDoc, updateField);
        setauthor("");
        setblog("");
        settitle("");
        setupdateData({ i_d: 0 });
        navigate("/read");
    }
    return (
        <React.Fragment>
            <div className="WriteBlog">
                <div className="Card">
                    <div className="Container">
                        <b>Title</b>
                        <input type="text"
                            value={title}
                            onChange={(e) => { settitle(e.target.value); }}
                        />
                    </div>
                    <div className="Container">
                        <b>Blog</b>
                        <textarea
                            value={blog}
                            onChange={(e) => { setblog(e.target.value); }}
                        />
                    </div>
                    <div className="Container">
                        <b>Author</b>
                        <input type="text"
                            value={author}
                            onChange={(e) => { setauthor(e.target.value); }}
                        />
                    </div>
                    {
                        (updateData.tigger === 1) ? <button onClick={updatePost}>Update</button> : <button onClick={AddPost}>Post</button>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default WritePost;