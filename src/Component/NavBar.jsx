import { NavLink } from "react-router-dom"
const NavBar = () => {
  return (

    <nav className="navbar bg-primary navbar-expand-sm border-bottom border-body" data-bs-theme="dark">
  <div className="container">
    <NavLink className="navbar-brand text-light" to="/">Intern House</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <NavLink className="nav-link "  to="/">Job Postings</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/postjob">Post a Job</NavLink>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar