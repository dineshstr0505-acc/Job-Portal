import "./Jobs.css";
import { Link } from "react-router-dom";
import jobs from "./JobsData";
function Jobs() {
  return (
    <div className="jobs-page">

      <div className="jobs-header">
        <h1>Find Your Dream Job</h1>
        <p>Browse the latest opportunities from top companies.</p>
      </div>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search by Job Title..."
        />

        <select>
          <option>All Locations</option>
          <option>Bangalore</option>
          <option>Chennai</option>
          <option>Hyderabad</option>
          <option>Mumbai</option>
          <option>Pune</option>
          <option>Delhi</option>
        </select>

        <button>Search</button>
      </div>

      <div className="job-container">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>

            <h2>{job.title}</h2>

            <h3>{job.company}</h3>

            <p>📍 {job.location}</p>

            <p>💼 {job.type}</p>

            <p>💰 {job.salary}</p>

            <Link to={`/jobs/${job.id}`}>
              <button className="apply-btn">
                View Details
              </button>
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Jobs;