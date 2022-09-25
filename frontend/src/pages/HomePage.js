import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import SearchResult from '../components/SearchResult'
import { getUser } from '../features/auth/authSlice'
import axiosService from '../features/axios'
import '../static/style/HomeStyle.css'
import { isLoggedIn } from '../utils/commonService'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getUser())
      
    }, [dispatch])

    const [repo, setRepo] = useState([])
    const [data, setData] = useState('trending')
    const handleOnChange=(e)=>{
        setData(e.target.value)
    }
    
    console.log("data",data);
    useEffect(() => {
        axiosService.getRepos(data)
        .then((res)=>{
          
            setRepo(res.data.items)
        })
        .catch((res)=>{
          console.log(res);
        })
    }, [data])
    console.log(repo);
    // console.log(profile);

    if (isLoggedIn()){

    return (
  
      <div>
          <div className="container">
          <div className="row">
              <div className="col-lg-12 card-margin">
                  <div className="card search-form">
                      <div className="card-body p-0">
                          <form id="search-form">
                              <div className="row">
                                  <div className="col-12">
                                      <div className="row no-gutters">
                                          <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                                              <select className="form-control" value={data} onChange={handleOnChange}>
                                                  <option >java</option>
                                                  <option>javaScript</option>
                                                  <option>Python</option>
                                                  <option>Golang</option>
                                                  <option>c++</option>
                                                  <option>c</option>
                                              </select>
                                          </div>
                                          <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                                              <input type="text" placeholder="Search..." className="form-control" id="search" name="search"/>
                                          </div>
                                          <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                                              <button type="submit" className="btn btn-base">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                              </button>
                                          </div>
                                          
                                      </div>
                                  </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="row">
                  <div className="col-12">
                      <div className="card card-margin">
                          <div className="card-body">
                              <div className="row search-body">
                                  <div className="col-lg-12">
  
                                  <SearchResult repo={repo} />
  
                                  </div>
                              </div>
                              <nav className="d-flex justify-content-center">
                                  <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                                      <li className="page-item">
                                          <a className="page-link no-border" href="#">
                                              <span aria-hidden="true">«</span>
                                              <span className="sr-only">Previous</span>
                                          </a>
                                      </li>
                                      <li className="page-item active"><a className="page-link no-border" href="#">1</a></li>
                                      <li className="page-item"><a className="page-link no-border" href="#">2</a></li>
                                      <li className="page-item"><a className="page-link no-border" href="#">3</a></li>
                                      <li className="page-item"><a className="page-link no-border" href="#">4</a></li>
                                      <li className="page-item">
                                          <a className="page-link no-border" href="#">
                                              <span aria-hidden="true">»</span>
                                              <span className="sr-only">Next</span>
                                          </a>
                                      </li>
                                  </ul>
                              </nav>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
  
          
  
      </div>
    )
    }else{
        return <Navigate to={'/login'}/>
    }
    
}

export default HomePage