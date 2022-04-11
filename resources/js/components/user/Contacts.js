import React  ,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Loader from "react-loader-spinner";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';  

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 

function Contacts() {

    const [userData, setData] = useState([]);
    const [loading, setloading] = useState('true');
    useEffect(()=>
    { 
        $(document).ready(function () {
            setTimeout(function(){
            $('#example1').DataTable();
             } ,1000);
        });
 
        let fetchData  =async() =>
        {
            const {data}=await axios.get(`/contacts`);   
            setData(data.data);
            setloading(false);
        }
        
        fetchData()
      //  axios.get()
    })
    
    const deletedata =async (id) => {
          await axios.delete(`/contacts/${id}`)
            .then(() => fetchData()).
            catch((err) => console.log(err));
            $('#cancelpop_'+id).click();
            toast.success('contact delete successfully');
    }

    return (
        <div className="content-wrapper" style={{background:"#fff" }}>
            {loading && <Loader style={{textAlign:"center" }}  type="Puff" color="#00BFFF" height={100} width={100} />}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card" >
                                <div className="card-body">
                                    <table id='example1' className="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                     { 
                                        userData.map((val, index) =>
                                        <tr key={index}>
                                            <th scope="row">{val.id}</th>
                                            <td>{val.fullname}</td>
                                            <td>{val.email}</td>
                                            <td>{val.phone}</td>
                                            <td><Link className="btn btn-info text-white" to={`edit/${val.id}`}>Edit</Link></td>
                                            <td><button data-toggle="modal" data-target={`#exampleModal_${val.id}`} className="btn btn-danger" type="button" >Delete</button></td>
                                            
                                            <div className="modal fade" id={`exampleModal_${val.id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        ...
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" id={`cancelpop_${val.id}`} className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-primary" onClick={() => deletedata(val.id)}>Save changes</button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </tr>
                                        
                                    ) }
                                    </tbody>
                                    <tfoot>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Full Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                    </tfoot>
                                    </table>
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

export default Contacts;
