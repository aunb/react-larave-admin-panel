import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  const [userdata, setuserdata] = useState(JSON.parse(localStorage.getItem('myData')));
    return (
      // Main Sidebar Container 
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
         {/* Brand Logo  */}
        <Link to="/" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: .8}} />
          <span className="brand-text font-weight-light">Admin Dashboard</span>
        </Link>
    
        {/*Sidebar  */}
        <div className="sidebar">

          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">{userdata && userdata.name}</a>
            </div>
          </div>
    
      
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
    
          
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon className
                   with font-awesome or any other icon font library  */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    User
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/add" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Add User</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List User</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Post
                    <i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/create/post" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Add Post</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/posts" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>List Post</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info"></i>
                  <p>Informational</p>
                </a>
              </li>
            </ul>
          </nav>
    
        </div>
    
      </aside>
    )
}

export default Nav;
