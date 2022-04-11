import React ,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch ,Route,useLocation} from "react-router-dom"
import Main from "./Main";
import {customjquery} from "../../../public/customjquery";
import Login from "./Login";
import Contacts from "./user/Contacts";
import AddContacts from "./user/AddContacts";
import EditContacts from "./user/EditContacts";
import posts from "./post/ListPost";
import addpost from "./post/AddPost";
import editpost from "./post/EditPost";
import "../../css/app.css"
function Example() {
    const loginuser=JSON.parse(localStorage.getItem('myData'));
    // console.log("userdata ",userdata);
    useEffect(()=>
    { 
        customjquery();
    },[])
    return (

        <Router>
            <Switch>
                 <Route path="/Login" exact component={Login}  /> 
                    { loginuser ?
                        <Main>
                        <Switch>
                            <Route path="/" exact component={Contacts}  /> 
                            <Route path="/add" exact component={AddContacts}  /> 
                            <Route path="/edit/:id" exact component={EditContacts}  /> 
                            <Route path="/posts" exact component={posts}  /> 
                            <Route path="/create/post" exact component={addpost}  /> 
                            <Route path="/editpost/:id" exact component={editpost}  /> 
                        </Switch> 
                        </Main>
                        : 
                        <Route path="/" exact component={Login}  /> 
                    }
                        
            </Switch> 
        </Router> 
    );
}

export default Example;

if (document.getElementById('master')) {
    ReactDOM.render(<Example />, document.getElementById('master'));
}