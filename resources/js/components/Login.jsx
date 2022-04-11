import axios from 'axios';
import { delay } from 'lodash';
import React ,{useEffect, useState} from 'react';
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';
function Login(props ) {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState(''); 
    const [loading, setloading] = useState();

    const [userdata, setuserdata] = useState('');

    const postdata = {
        email: email,
        password: password,
     };
     const loginuser =async () => {
        event.preventDefault();
        setloading(true);

        const res=await axios.post("/api/login",postdata).
        then((res)=>{
            console.log(res.data.code);     
            if(res.data.code==200)
            { 
                toast.success('Login Successfully');
                localStorage.setItem("myData", JSON.stringify(res.data.data));
                const myuserdata= JSON.parse(localStorage.getItem('myData'));
                const timer = setTimeout(() => {
                    props.history.push('/');
                  }, 2000);                
            }
            else{
                toast.error('Invalid credintial');
            }
        }).catch(()=>{
            console.log(res);
        });
       
        setloading(false);
        // props.history.push('/');
    }
    return (
        <div className='container'>
            <h3 className='text-center'>Login Page</h3>
            {loading && <Loader style={{textAlign:"center" }}  type="Puff" color="#00BFFF" height={100} width={100} />}

            <form>
                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} value={email} /> <br />
                <input type="password" className='form-control' onChange={(e) => setpassword(e.target.value)} value={password} /> <br />
                <button onClick={() => loginuser()} type="button" className="btn btn-primary float-right">Submit</button>
            </form>
            <ToastContainer /> 
        </div>

    )
}

export default Login;
