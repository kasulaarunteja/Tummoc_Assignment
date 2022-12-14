import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { fetchToken } from "../Redux/action";
import axios from "axios";



const Login = () => {

  //  const [godata, setGodata] = useState("") 

  // const google = () => {
  //   axios.post("https://myassignmentgoogle.herokuapp.com/auth/google", "_self").then((res) => {
  //     setGodata(res.data);
  //   }).catch((er) => {
  //     console.log(er)
  //   })
  // }

  const google =()=> {
    window.open("https://myassignmentgoogle.herokuapp.com/auth/google", "_self")
  }


  const [data, setData] = useState({
    email:"",
    password:"",
  });

  // const [login, setLogin] = useState(false);

  const  dispatch = useDispatch();
  const navigate = useNavigate();


  const token = useSelector((store) => store.token.token)
  // console.log(token);

  useEffect (() => {
    if(token !== null){
      return true;
    }
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchToken(data));
    navigate('/home')
    alert("login Successful")
  }

   const handleChange = (e) => {
    const {id, value} = e.target;
    setData({...data, [id]: value});

    // setData({
    //     ...data,
    //     [e.target.value] : e.target.value
    // })
   }


  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?
            <Link to="sing">
              <span className="link-primary">Sign Up</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <br />
            <input
              type="email"
              id="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange= {handleChange}
              // onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <br />
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange= {handleChange}
              // onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <br />
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button className="btn btn-primary ww-100 mb-4" onClick={google}>
              <span className="fa fa-google me-4">
                </span> sing in with Google</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
