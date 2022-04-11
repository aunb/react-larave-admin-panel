import axios from 'axios';
import React ,{useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  
function AddContacts(props) {
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState(''); 
    const [loading, setloading] = useState('true');
    const userDate = {
        fullname: fullname,
        email: email,
        phone: phone,
     };
         useEffect(() =>
        {
            setloading(false);  
      });
   
     const formSubmit = async (event) => {
        event.preventDefault();
        const res=await axios.post("/contacts",userDate);
        toast.success('new contact add successfully');
        props.history.push('/');
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
                                <h3>Add User</h3>
                                <form method={"POST"} onSubmit={(e) => formSubmit(e)}>
                                    <div className="form-group">
                                        <label htmlFor="email">First Name:</label>
                                        <input type="text" className="form-control" id="email" onChange={(e) => setfullname(e.target.value)} value={fullname}  placeholder="Enter First Name" name="fullname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Last Name:</label>
                                        <input type="text" className="form-control" onChange={(e) => setemail(e.target.value)} value={email}  placeholder="Enter email" name="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pwd">Phone Number:</label>
                                        <input type="text" className="form-control" onChange={(e) => setphone(e.target.value)} value={phone} placeholder="Enter Phone Number" name="phone" />
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

export default AddContacts;
