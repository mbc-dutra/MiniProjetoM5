import axios from "axios";
import { useEffect, useState } from "react";
import './job.css'; // Importa o arquivo CSS

const Job = () => {
  const [jobs, setJobs] = useState([]);

  const allJobs = async () => {
    try {
      const res = await axios.get("http://localhost:4000/jobs");
      setJobs(res.data.jobList);
      console.log(res.data.jobList);
    } catch (error) {
      console.error("Erro ao buscar as vagas", error);
    }
  };

  useEffect(() => {
    allJobs();
  }, []);

  return (
    <div>
      <h1>Vagas Disponíveis</h1>
      <div className="job-container"> {/* Adiciona um contêiner para o scroll */}
        <ul className="job-list">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <li key={job.id} className="job-card">
                <h2>{job.jobTitle}</h2>
                <div className="job-details">
                  <p>Localização: <span>{job.location}</span></p>
                  <p>Salário: <span>R${job.wage}</span></p>
                  <p>Requisitos: <span>{job.requirements}</span></p>
                  <p>Data de Envio: <span>{job.sendData}</span></p>
                  <p>Data Limite: <span>{job.limitDate}</span></p>
                  <p className="job-description">{job.description}</p>
                </div>
              </li>
            ))
          ) : (
            <p>Carregando vagas...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Job;
