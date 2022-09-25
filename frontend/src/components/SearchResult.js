
import { useNavigate} from 'react-router-dom'

const SearchResult = ({repo}) => {
    
    const navigate = useNavigate()
    const handleOnClick =()=>{
        localStorage.clear()
        navigate('/login')

    }
    
  return (
    <>
    <div className="search-result">
        <div className="result-header">
            <div className="row">
                <div className="col-lg-6">
                    <div className="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                </div>
                <div className="col-lg-6">
                    <div className="result-actions">
                        <div className="result-sorting">
                            <span>Sort By:</span>
                            <select className="form-control border-0" id="exampleOption">
                                <option value="1">Relevance</option>
                                <option value="2">Names (A-Z)</option>
                                <option value="3">Names (Z-A)</option>
                            </select>
                        </div>
                        <div className="result-views">
                            <button type="button" className="btn btn-soft-base btn-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className="feather feather-list"
                                >
                                    <line x1="8" y1="6" x2="21" y2="6"></line>
                                    <line x1="8" y1="12" x2="21" y2="12"></line>
                                    <line x1="8" y1="18" x2="21" y2="18"></line>
                                    <line x1="3" y1="6" x2="3" y2="6"></line>
                                    <line x1="3" y1="12" x2="3" y2="12"></line>
                                    <line x1="3" y1="18" x2="3" y2="18"></line>
                                </svg>
                            </button>
                            <button type="button" onClick={handleOnClick} className="btn btn-soft-base btn-icon">
                                logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="result-body">
            <div className="table-responsive">
                <table className="table widget-26">
                    <tbody>
                        {
                            repo?.map((item)=>{
                                return(

                                <tr key={item.id}>
                                    <td>
                                        <div className="widget-26-job-emp-img">
                                            <img src={item.owner.avatar_url} alt="Company" />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="widget-26-job-title">
                                            <a href="#">{item.owner.login}</a>
                                            <p className="m-0"><a href="#" className="employer-name">{item.id}</a> <span className="text-muted time"></span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="widget-26-job-info">
                                            <p className="type m-0">{item.full_name}</p>
                                            <p className="text-muted m-0">in <span className="location">{item.pushed_at}</span></p>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="widget-26-job-salary">{item.visibility}</div>
                                    </td>
                                    <td>
                                        <div className="widget-26-job-category bg-soft-base">
                                            <i className="indicator bg-base"></i>
                                            <span>{item.language}</span>
                                        </div>
                                    </td>
                                    <td>
                                        
                                    </td>
                                </tr>
                                )

                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default SearchResult