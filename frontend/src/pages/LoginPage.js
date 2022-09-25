import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login } from '../features/auth/authSlice'
import LoginGithub from 'react-login-github';
import { githubLogin } from '../features/axios'
import "../static/style/loginStyle.css"


// require('dotenv').config()
const client_id = process.env.REACT_APP_GitHubClientID
console.log("id",client_id);
// const redirect_uri = 'http://localhost:3000/'

const LoginPage = () => {
    const dispatch = useDispatch()
    const {isAuthenticated,message} = useSelector(
        state => state.auth
    )
    const [formData, setFormData] = useState({
        email : '',
        password : ''
    })
    const {email, password} = formData
    const handleOnChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    

    useEffect(() => {
        if(message){
           toast.error("Username or password is incorect")
        }
      }, [message])
    
      const handleOnSubmit = (e) =>{
        e.preventDefault()
        const regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!password || !email) {
        toast.error("Enter all fields");
        } else if (!regex.test(email)) {
        toast.error("Email is invalid");
        } else {
        dispatch(login(formData));
        }
    }
    const responseGithub=(response)=> {
        console.log(response.code);
        githubLogin(response.code);
      }

    if (isAuthenticated) return <Navigate to='/' />;
  return (
    <>
        <div className="container bootstrap snippets bootdey">
        <div className="row login-page"> 
            <div className="col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4"> 
                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt='' className="user-avatar img-thumbnail"/> 
                {/* <h1>Bootdey.com</h1>  */}
                <form onSubmit={handleOnSubmit}  className="ng-pristine ng-valid"> 
                    <div className="form-content"> 
                        <div className="form-group"> 
                            <input type="text" 
                            className="form-control input-underline input-lg" 
                            placeholder="Email"
                            name='email'
                            value={email}
                            onChange={handleOnChange}
                            /> 
                        </div> 
                        <div className="form-group"> 
                            <input type="password" 
                            className="form-control input-underline input-lg" 
                            placeholder="Password"
                            name='password'
                            value={password}
                            onChange={handleOnChange}
                            /> 
                        </div> 
                    </div> 
                    <button className="btn btn-info btn-lg">
                        Log in
                    </button> &nbsp; 
                    <button type="submit" className="btn btn-info btn-lg">Register</button>
                    {/* <button type="submit" className="btn btn-info btn-lg">Login With Github</button> */}
                    {/* <a
                    className="login-link"
                    href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                    onClick={() => {
                        setData({ ...data, errorMessage: "" });
                        
                    }}
                    >
                    <GithubIcon />
                    <span>Login with GitHub</span>
                    </a> */}
                    
                    <LoginGithub
                    clientId={client_id}
                    buttonText="Login"
                    onSuccess={responseGithub}
                    onFailure={responseGithub}/>,
                </form> 
            </div> 
        </div>
    </div>
    </>
  )
}

export default LoginPage