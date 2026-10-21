import { useParams, Link } from "react-router-dom";
import jobs from "./JobsData";
import "./JobDetails.css";

function JobDetails() {
    const { id } = useParams();

    if (!id) {
        return (
            <div className="job-details-empty">
                <h1>Job Details</h1>
                <p>Select a job from the Jobs page to view its details.</p>

                <Link to="/Jobs">
                    <button>Browse Jobs</button>
                </Link>
            </div>
        );
    }

    // Find selected job
    const job = jobs.find((item) => item.id === Number(id));

    // Invalid job ID
    if (!job) {
        return (
            <div className="job-details-empty">
                <h1>Job Not Found</h1>
                <p>The job you are looking for does not exist.</p>

                <Link to="/Jobs">
                    <button>Back to Jobs</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="job-details">

            <div className="job-details-header">
                <h1>{job.title}</h1>
                <h2>{job.company}</h2>

                <div className="job-info">
                    <p>📍 {job.location}</p>
                    <p>💼 {job.type}</p>
                    <p>💰 {job.salary}</p>
                </div>
            </div>

            <div className="job-details-content">

                <section>
                    <h2>Job Description</h2>
                    <p>{job.description}</p>
                </section>

                <section>
                    <h2>Responsibilities</h2>

                    <ul>
                        {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Requirements</h2>

                    <ul>
                        {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </section>

                <div className="job-actions">
                    <button className="apply-btn">
                        Apply Now
                    </button>

                    <Link to="/Jobs">
                        <button className="back-btn">
                            Back to Jobs
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default JobDetails;
