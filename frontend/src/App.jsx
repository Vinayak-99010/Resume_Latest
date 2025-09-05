import React from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      {/* Hero / Intro */}
      <header style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1>Vinayak Kulkarni – DevOps Engineer</h1>
        <p>
          Passionate about building scalable CI/CD pipelines, automating cloud
          infrastructure, and ensuring reliable deployments with{" "}
          <strong>AWS, Jenkins, Docker, and Kubernetes</strong>.
        </p>
      </header>

      {/* About Me Section */}
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={{ textAlign: "center" }}>About Me</h2>
        <div className="card-grid">
          <div className="card">
            <h3>⚡ Skills</h3>
            <ul>
              <li>CI/CD with Jenkins & GitHub Actions</li>
              <li>Infrastructure as Code (Terraform, CloudFormation)</li>
              <li>Docker & Kubernetes (EKS, Minikube)</li>
              <li>Monitoring with Prometheus & Grafana</li>
            </ul>
          </div>

          <div className="card">
            <h3>🛠️ Tools & Tech</h3>
            <ul>
              <li>AWS (EC2, S3, VPC, IAM, RDS)</li>
              <li>Linux & Shell Scripting</li>
              <li>Git, GitHub Webhooks</li>
              <li>Ansible & Helm</li>
            </ul>
          </div>

          <div className="card">
            <h3>🚀 Projects</h3>
            <ul>
              <li>Job Tracker (this app)</li>
              <li>Resume Website on AWS</li>
              <li>URL Shortener with Kubernetes</li>
              <li>E-Commerce CI/CD Pipeline</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Job Tracker Section */}
      <section>
        <h2>Job Tracker</h2>
        <JobForm />
        <JobList />
      </section>
    </div>
  );
}
