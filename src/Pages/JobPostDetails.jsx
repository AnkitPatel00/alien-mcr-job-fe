import { useParams } from "react-router-dom"
import { useJobContext,Spinner } from "../Context/JobsContext"

const JobPostDetails = () => {

  const { jobs, loading, error } = useJobContext()

  const { jobId } = useParams()

  const jobPost = jobs?.find((job) => job._id == jobId)
  
  return (
    <>
      <div className="container py-4">
        
        <div className="d-flex justify-content-center">
{loading && <Spinner/>}
          </div>

        {error && <p>{error.message}</p>}
        {jobPost && <div>
          <h2>{jobPost.jobTitle}</h2>
          <div className="card">
<div className="card-body">
              <p><strong>Company Name: </strong>{jobPost.companyName}</p>
              <p><strong>Loaction: </strong>{jobPost.location}</p>
              <p><strong>Salary: </strong>{jobPost.salary}</p>
              <p><strong>Job Type: </strong>{jobPost.jobType}</p>
              <p><strong>Decription: </strong>{jobPost.jobDescription}</p>
              <p><strong>Qualifications: </strong></p>
              <ol>
                {jobPost.requiredQualifications.split('\n').map((skill,i) => <li key={i}>{skill}</li>)}
              </ol>
             
            </div>
            </div>
        </div>}
       
    </div>
    </>
  )
}
export default JobPostDetails