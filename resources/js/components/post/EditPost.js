import React ,{useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
import {useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  
function EditPost(props) {
    // get id from url
    const post_id = props.match.params.id;

    const locationHistory = useHistory(); 
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [loading, setloading] = useState('true');

    const [selectedImage, setSelectedImage] = useState();

        useEffect(()=>{
            setloading(false);
            const fetchPostData  =async() =>{
            const {data}=await axios.get(`/post/${post_id}/edit`);   
            
            settitle(data.data.title)
            setdescription(data.data.description)
        }
        fetchPostData()
        //  axios.get()
        },[])
    // const updatepostdata = {
    //     title: title,
    //     description: description,
    //     image: selectedImage,
    //  };

    const updatepostform = async (event) => {   

        event.preventDefault();
        const postData = new FormData()
        postData.append("post_id",post_id)
        postData.append("title",title)
        postData.append("description",description)
        postData.append("image",selectedImage)     
        
        console.log("selectedImage",selectedImage);
        const res=await axios({method: "post",
        url: `/api/post_update`,
        json: true,
        data: postData,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }});
        toast.success('post update successfully');
        const timer = setTimeout(() => {
            locationHistory.push('/posts');
          }, 2000); 
        
        
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
                                    <h3>Edit Post</h3>
                                    <form method={"POST"} onSubmit={(e) => updatepostform(e)} enctype="application/x-www-form-urlencoded">
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
                                        <button type="submit" className="btn btn-primary">Update</button>
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

export default EditPost;
