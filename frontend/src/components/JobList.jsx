import { useEffect, useState } from "react";
import { getJobs, deleteJob, updateJob } from "../api";

export default function JobList({ refresh }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, [refresh]);

  const loadJobs = async () => {
    const res = await getJobs();
    setJobs(res.data);
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    loadJobs();
  };

  const handleStatusChange = async (id, status) => {
    await updateJob(id, { status });
    loadJobs();
  };

  return (
    <ul className="space-y-2">
      {jobs.map((job) => (
        <li key={job._id} className="border p-3 flex justify-between items-center">
          <div>
            <strong>{job.company}</strong> - {job.role} ({job.status})
            <div className="text-sm text-gray-500">Applied: {job.appliedDate}</div>
          </div>
          <div className="flex gap-2">
            <select value={job.status} onChange={(e) => handleStatusChange(job._id, e.target.value)} className="border p-1">
              <option>Applied</option>
              <option>Interview</option>
              <option>Rejected</option>
              <option>Offer</option>
            </select>
            <button onClick={() => handleDelete(job._id)} className="bg-red-500 text-white px-2">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
