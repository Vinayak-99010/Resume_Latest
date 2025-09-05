import { useState } from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Job Tracker</h1>
      <JobForm onJobAdded={() => setRefresh(refresh + 1)} />
      <JobList refresh={refresh} />
    </div>
  );
}

export default App;
