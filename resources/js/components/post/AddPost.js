import React ,{useEffect, useState} from 'react';
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';   
import Loader from "react-loader-spinner"; 
import 'react-toastify/dist/ReactToastify.css';  
function AddPost(props) {
    const locationHistory = useHistory(); 
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [loading, setloading] = useState('true');
    
    const [selectedImage, setSelectedImage] = useState(null);
   
    const myuserdata= JSON.parse(localStorage.getItem('myData'));
     useEffect(() =>
     {
         setloading(false);  
   });
    const postformSubmit = async (event) => { 
        const postData = new FormData()
        postData.append("title",title)
        postData.append("description",description)
        postData.append("image",selectedImage) 
        console.log("selectedImage",selectedImage);  
        event.preventDefault();
        const res=await axios({method: "post",
        url: "http://localhost:8000/api/post",
        data: postData,
        headers: { "Content-Type": "multipart/form-data" , Authorization: 'Bearer ' + myuserdata.token}});
        console.log("responce",res);  

        toast.success('new post add successfully');
        locationHistory.push('/posts'); 
      };
    return (
        <div className="content-wrapper" style={{background:"#fff" }}>
            {loading && <Loader style={{textAlign:"center" }}  type="Puff" color="#00BFFF" height={100} width={100} />}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card" >
                                <div className="card-body">
                                    <h3>Add Post</h3>
                                    <form method='post' onSubmit={(e) => postformSubmit(e)}>
                                        <div className="form-group">
                                            <label htmlFor="email">Post Title:</label>
                                            <input type="text" className="form-control" id="email" onChange={(e) => settitle(e.target.value)} value={title}  placeholder="post title" name="title" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pwd">Post Description:</label>
                                            <input type="text" className="form-control" onChange={(e) => setdescription(e.target.value)} value={description}  placeholder="post descritpion" name="description" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pwd">Image:</label>
                                            <input type="file" name="myImage" onChange={(event) => {setSelectedImage(event.target.files[0]);}}     />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                    <ToastContainer />
                                </div>  
                            </div> 
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    )
}

export default AddPost;
