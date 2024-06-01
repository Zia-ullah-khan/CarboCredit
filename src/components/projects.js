import React, { useEffect, useState } from 'react';
import { Xumm } from 'xumm';
import '../App.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const fetchData = async () => {
    const apiUrl = `https://generally-loving-bluegill.ngrok-free.app/api/get_projects`;

    try {
      const response = await fetch(apiUrl, {
        mode: "cors",
        headers: {
          'ngrok-skip-browser-warning': '69420'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const xumm = new Xumm('Some API Key');
    xumm.user.account.then(account => {
      fetchData();
    });
  }, []);
  const handlePurchase = (projectId) => {
    window.location.href = `/purchase?project=${projectId}`;
  };
  return (
    <div className="hero">
      <div className="navbar">
        <img src="/Images/logo.png" className="logo" alt="logo" />
      </div>
      <div className="content">
      <div className="project-container">
          <h2>Projects</h2>
          <div className="elevated-background">
            <table className="project-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>CC</th>
                  <th>Owner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project._id}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.location}</td>
                    <td>{project.CC}</td>
                    <td>{project.Owner}</td>
                    <td>
                      <button onClick={() => handlePurchase(project.name)}>Purchase</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <footer>
              <p> If you want to add your projects contact us at add.project@carbocredit.org</p>
            </footer>
      </div>
    </div>
  );
};

export default Projects;
