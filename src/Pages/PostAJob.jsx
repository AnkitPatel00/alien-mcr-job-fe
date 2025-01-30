
import { useJobContext } from "../Context/JobsContext"

const PostAJob = () => {

  const { formData,loading,handleFormValue,handleSubmit,formMessage,formError } = useJobContext()
  

  return (
    <>
      <div className="container py-4">
        <h2 className="display-5">Post a Job</h2>
        
        <form onSubmit={handleSubmit}>

          <label className="mb-2" htmlFor="jobTitle">Job Title:</label>
          <input type="text" value={formData.jobTitle} name="jobTitle" onChange={handleFormValue} className="form-control mb-2" id="jobTitle" required />
          
          <label className="mb-2" htmlFor="companyName">Company Name:</label>
          <input type="text" value={formData.companyName} name="companyName" onChange={handleFormValue} className="form-control mb-2" id="companyName" required />

          <label className="mb-2" htmlFor="location">Location:</label>
          <input type="text" value={formData.location} name="location" onChange={handleFormValue} className="form-control mb-2" id="location" required />

          <label className="mb-2" htmlFor="salary">Salary:</label>
          <input type="number" value={formData.salary} name="salary" onChange={handleFormValue} className="form-control mb-2" id="salary" required />

          <label className="mb-2" htmlFor="jobType">Job Type:</label>
          <select value={formData.jobType} onChange={handleFormValue} name="jobType" className="form-select mb-2" id="jobType">
            <option value="Full-time (On-site)">Full-time (On-site)</option>
            <option value="Part-time (On-site)">Part-time (On-site)</option>
            <option value="Full-time (Remote)">Full-time (Remote)</option>
            <option value="Part-time (Remote)">Part-time (Remote)</option>
          </select>

          <label className="mb-2" htmlFor="jobDescription">Job Description:</label>
          <textarea value={formData.jobDescription} onChange={handleFormValue} name="jobDescription" className="form-control mb-2" id="jobDescription"></textarea>

          <label className="mb-2" htmlFor="requiredQualifications">Job Qualifications:</label>
          <textarea value={formData.requiredQualifications} onChange={handleFormValue} name="requiredQualifications" className="form-control mb-3" id="requiredQualifications"></textarea>

          <button className={loading?"btn btn-info":"btn btn-primary" }>{loading ?"Saving..." :"Post Job"}</button>

        </form>

        {formMessage && <p className="mt-2 text-info">{formMessage}</p>}
        {formError && <p className="mt-2 text-danger">{formError.message }</p>}

      </div>
   
    </>
  )
}

export default PostAJob