import { useEffect, useState } from "react";

export default function CheckpointsList() {
    const [checkpoints, setCheckpoints] = useState([]);

    useEffect(() => {
        async function fetchCheckpoints() {
            const response = await fetch("/api/checkpoints");
            const data = await response.json();
            setCheckpoints(data);
        }
        fetchCheckpoints();
    }, []);

    return (
        <div>
            <h1>Lista de Checkpoints</h1>
            <ul>
                {checkpoints.map((checkpoint: any, index: number) => (
                    <li key={index}>
                        <h3>{checkpoint.disciplina}</h3>
                        <p>{checkpoint.comentario}</p>
                        <p>Data: {checkpoint.data}</p>
                        <p>Média: {checkpoint.media}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
