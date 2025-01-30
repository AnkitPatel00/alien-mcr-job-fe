import {useState } from "react"
import { Link } from "react-router-dom"
import { useJobContext,Spinner } from "../Context/JobsContext"
const JobPostings = () => {

  const { jobs,loading,error,handleDelete,deleteLoading,deleteBtnId } = useJobContext()
  

  const [search,setSearch] = useState("")
 
  const filtered = jobs && search ? jobs.filter((job) => job.jobTitle.includes(search) || job.jobTitle.toLowerCase().includes(search) ) : jobs



  const JobList = () => {
    return (
      <>
      {filtered?.map((job) => (

  <div key={job._id}  className="col-lg-4">
    <div className="card p-3">
      <div className="card-body ">
            <h5 className="card-title">{job.jobTitle}</h5>
            <p className="card-text"><strong>Company Name: </strong>{job.companyName}</p>
            <p className="card-text"><strong>Location: </strong>{job.location}</p>
            <p className="card-text"><strong>Job Type: </strong>{job.jobType}</p>
       </div>

        <div className="row px-2 gap-2">
            <Link to={`/postjobdetails/${job._id}`} className="btn btn-primary col-md-5 ">See Details</Link>

              <button onClick={()=>handleDelete(job._id)} className={`${deleteLoading && deleteBtnId==job._id ?"btn btn-info":"btn btn-danger"} col-md-5`}>{deleteLoading && deleteBtnId==job._id ? "Deleting..." : "Delete"}</button>
       </div>  
    </div>
  </div>
 
        ))}
      </>
    )
  }



  return (
    <>
      <div className="container py-4">
       
        {error && <p className="mt-2 text-danger">{error}</p>}

        <div className="row">
          <div className="col-md-6">
<input className="form-control" onChange={(e)=>setSearch(e.target.value)} placeholder="Search by job title..." />
          </div>
        </div>
        
        <h1 className="mt-3 display-5">All Jobs</h1>

        <div className="row g-3">

          <div className="d-flex justify-content-center">
{loading && <Spinner/>}
          </div>
           

          <JobList />

          

          {jobs?.length === 0 &&
          <div className="d-flex justify-content-center">
<h3 className="display-5">Add Atleast One Job Post</h3>
          </div>
            }

        </div>
      </div>
   
    </>
  )
}

export default JobPostings