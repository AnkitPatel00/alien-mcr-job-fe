import { useEffect, useState } from "react"
import { createContext, useContext } from "react"

const apiUrl = "https://internhouse-be.vercel.app/api/jobposts"

const JobsContext = createContext()
const useJobContext = () => useContext(JobsContext)

  const Spinner = () => {
    return (
      <div class="spinner-border mt-5" style={{width: "3rem", height: "3rem"}} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    )
  }



const initialFormData = {
   jobTitle:"",
      companyName:"",
      location:"",
      salary: "",
      jobType:"Full-time (On-site)",
      jobDescription:"",
      requiredQualifications:""
}




const JobsContextProvider = ({children}) => {

  const [jobs, setJobs] = useState(null)
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
   const [deleteBtnId,setDeleteBtnId] = useState(null)
  const [error, setError] = useState(null)
  const [formError, setFromError] = useState(null)

  const [formData, setFormData] = useState(initialFormData)
  const [formMessage, setFormMessage] = useState("")
  
  //add job Post


  const postApi = (jobData) => {

    console.log(jobData)

  setLoading(true)
    fetch(`${ apiUrl }/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(jobData)
      }).then((res) => {
        if (!res.ok)
        {
          throw new Error("Failed to add Job Post")
        }
        return res.json()
      }).then((data) => {
        setJobs((prev) => [...prev, data.savedJobPost])
        setFormMessage(data.message)
        setFormData(initialFormData)
        setFromError(null)
      })
      .catch(error => {
        setFromError(error)
      }).finally(() => setLoading(false))
}


  //get Jobs
  
  const fetchApi = () => {
    setLoading(true)
    fetch(`${apiUrl}/all`)
      .then((res) => {
        if (!res.ok)
        {
          setError("response was not ok!")
        }
        return res.json()
      }).then((data) => {
        setJobs(data)
        setError(null)
      }).catch((error) => setError(error.message))
    .finally(()=>setLoading(false))
  }

  useEffect(() => {
    fetchApi()
  },[])

  //delete jobs

  const handleDelete = (jobId) => {
    setDeleteBtnId(jobId)
   setDeleteLoading(true)
      fetch(`${apiUrl}/delete/${jobId}`, { method: "Delete" })
      .then((res) => {
        if (!res.ok)
        {
          throw new Error("failed to delete job post")
        }
      return res.json()
      }).then((data) => {
        if (data)
        {
          setJobs((prev)=>prev.filter((job)=>job._id != jobId))
        }
      }).catch((error) => console.log(error.message))
        .finally(() => {
          setDeleteLoading(false)
          setDeleteBtnId(null)
        })
    
  }


  const handleFormValue = (e) => {
    const {name,value} = e.target
    setFormData((prev)=>({...prev,[name]:name==salary?parseInt(value):value}))
  }


    const handleSubmit =(e) => {
    e.preventDefault()

    if (Object.keys(formData).length >= 7)
    {

      postApi(formData)

    }

  }

  const contextValue={jobs,fetchApi,loading,error,handleDelete,deleteLoading,deleteBtnId,formData,handleFormValue,handleSubmit,formMessage,formError}
  
  return (
    <JobsContext.Provider value={contextValue}>
{children}
    </JobsContext.Provider>
  )

}

export default JobsContextProvider

export {useJobContext,Spinner}