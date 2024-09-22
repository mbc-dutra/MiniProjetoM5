import axios from "axios"; 
import { useEffect, useState } from "react";

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
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h2>{job.jobTitle}</h2>
              <p>{job.description}</p>
              <p>Localização: {job.location}</p>
              <p>Data Limite: {job.limitDate}</p>
              <p>Salário: R${job.wage}</p>
              <p>Requisitos: {job.requirements}</p>
              <p>Data de Envio: {job.sendData}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando vagas...</p>
      )}
    </div>
  );
};

export default Job;