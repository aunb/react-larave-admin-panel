import React ,{useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
function EditContacts(props) {
    // get id from url
    const contact_id = props.match.params.id;

    // get single record from api
    const [userData, setData] = useState([]); 

    const [fullname, setfullname] = useState();
    const [email, setemail] = useState();
    const [phone, setphone] = useState(''); 
    const [loading, setloading] = useState('true');

    useEffect(()=>{
        setloading(false);

       const fetchData  =async() =>{
       const {data}=await axios.get(`/contacts/${contact_id}/edit`);   
      
       setfullname(data.data.fullname)
       setemail(data.data.email)
       setphone(data.data.phone)
    }
    fetchData()
      //  axios.get()
    },[])

    const updatedata = {
        fullname: fullname,
        email: email,
        phone: phone,
     };

    const updateform = async (event) => {
        event.preventDefault();
        const res=await axios.patch(`/contacts/${contact_id}`,updatedata);  
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
                                    <h3>Edit User</h3>
                                    <form method={"POST"} onSubmit={(e) => updateform(e)}>
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="text" className="form-control" id="fullname" onChange={(e) => setfullname(e.target.value)} value={fullname}  placeholder="Enter name" name="fullname" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email:</label>
                                            <input type="emai" className="form-control" id="email" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Enter email" name="email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="pwd">Password:</label>
                                            <input type="text" className="form-control" id="pwd" onChange={(e) => setphone(e.target.value)} value={phone} placeholder="Enter phone" name="phone" />
                                        </div>
                                        <div className="form-group form-check">
                                            <label className="form-check-label">
                                                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>  
                            </div> 
                        </div>
                    </div>
                </div> 
            </section>
        </div>
    )
}

export default EditContacts;
