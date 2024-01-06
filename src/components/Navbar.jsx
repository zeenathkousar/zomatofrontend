import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export const Navbar = () => {

  const [cartView,setCartView]=useState(false);

  const data=useCart();


  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('authToken');
    navigate('/login')
  }

  return (
    <div>
      <nav className="navbar navbar-header navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/" fs-1 fst-italic>
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link className="nav-link active fw-bold" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {(localStorage.getItem('authToken')) ?
                <li className="nav-item">
                  <Link className="nav-link fw-bold " to='/myorders'>My Orders</Link>

                </li>
                : ""
              }

            </ul>
            {(!localStorage.getItem('authToken')) ?
              <div className="d-flex">
                <Link className="nav-link mx-2 fw-bold" to="/login">Login</Link>
                <Link className="nav-link mx-2 fw-bold" to="/signup">SignUp</Link>
              </div>
              : 
              <div>
                <div className="btn bg-white text-success mx-2 fw-bold" onClick={()=>{setCartView(true)}}>
                  My Cart {"  "}
                <Badge pill bg="danger" badgeContent={data.length}> {data.length} </Badge>
                </div>
                {
                  cartView ? <Modal onClose={()=>setCartView(false)}> <Cart/> </Modal>  : null
                }

              <div className="btn bg-white text-danger mx-2 fw-bold" onClick={handleLogout}>Logout </div>
              </div>
            }


          </div>
        </div>
      </nav>
    </div>
  );
};
