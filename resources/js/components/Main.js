import React ,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {customjquery} from "../../../public/customjquery";
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom"
import Header from "./Header";
import Nav from "./Nav";

function Main(props) {
    useEffect(()=>
    { 
        customjquery();
    },[])
    return (
        <>
            <Header />
            <Nav />
            <div className="container mt-4" >   
                <div >{props.children}</div>
            </div>
        </>
           
    );
}

export default Main;

