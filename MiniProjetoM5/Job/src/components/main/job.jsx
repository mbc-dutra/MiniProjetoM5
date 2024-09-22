import axios from "axios";
import { useEffect, useState } from "react";
import './job.css';

const Job = ({ filterInput }) => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async (params = {}) => {
        try {
            const res = await axios.get("http://localhost:4000/jobs", { params });
            setJobs(res.data.jobList || []);
        } catch (error) {
            console.error("Erro ao buscar vagas", error);
        }
    };

    useEffect(() => {
        const filters = filterInput.split(",").map(item => item.trim());
        const params = {};

        // A localização deve ser informada antes da categoria
        if (filters[0]) params.location = filters[0];  // Localização
        if (filters[1]) params.category = filters[1];  // Categoria (se a localização estiver preenchida)

        fetchJobs(Object.keys(params).length ? params : undefined); // Chama a função de busca com os filtros, se houver
    }, [filterInput]);

    return (
        <div>
            <img src="src/assets/imageCenter.jpg" alt="background pic" className="background-main" />
            <h1>Vagas Disponíveis</h1>
            <div className="job-container">
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
                                    <p>Categoria: <span>{job.category}</span></p>
                                    <p className="job-description">{job.description}</p>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>Nenhuma vaga encontrada.</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Job;
