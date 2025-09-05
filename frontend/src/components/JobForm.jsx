import { useState } from "react";
import { addJob } from "../api";

export default function JobForm({ onJobAdded }) {
  const [form, setForm] = useState({ company: "", role: "", appliedDate: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(form);
    setForm({ company: "", role: "", appliedDate: "" });
    onJobAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="border p-2" required />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" className="border p-2" required />
      <input type="date" name="appliedDate" value={form.appliedDate} onChange={handleChange} className="border p-2" required />
      <button type="submit" className="bg-blue-500 text-white px-4">Add</button>
    </form>
  );
}
