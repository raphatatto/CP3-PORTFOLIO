"use client";

import { useEffect, useState } from "react";
import checkpointsData from "@/data/checkpoints.json";
import { CheckpointType } from "@/types";

export default function Checkpoints() {
  const [checkpoints, setCheckpoints] = useState<CheckpointType[]>([]);

  useEffect(() => {
    setCheckpoints(checkpointsData);
  }, []);

  // Listagem de todas as disciplinas
  const disciplinas = ["Front-end", "Java", "Python", "Banco de Dados", "Software Engineering"];

  // Objeto de mapeamento para as descrições das disciplinas
  const descricaoDisciplinas: { [key: string]: string } = {
    "Front-end": "Desenvolvimento de interfaces interativas e responsivas.",
    "Java": "Linguagem de programação orientada a objetos amplamente utilizada.",
    "Python": "Linguagem de programação de fácil leitura e versátil.",
    "Banco de Dados": "Gerenciamento de dados e armazenamento estruturado.",
    "Software Engineering": "Engenharia de software e design de sistemas complexos.",
  };

  const cp1: { [key: string]: string } = {
    "Front-end": "CP1 - Cursos FIAP.",
    "Java": "CP1 - CP1 - Checkpoint 1.",
    "Python": "CP1 - Variáveis e Imputs.",
    "Banco de Dados": " CP1 - Entidade e Relacionamento.",
    "Software Engineering": "CP1 - Checkpoint 1.",
  };
  const cp2: { [key: string]: string } = {
    "Front-end": "CP2 - Implementação de Protótipo.",
    "Java": "CP2 - Checkpoint 2.",
    "Python": "CP2 - Laços de repetição e decisão.",
    "Banco de Dados": " CP2 - Especialização - Generalização.",
    "Software Engineering": "CP2 - Checkpoint 2.",
  };
  const cp3: { [key: string]: string } = {
    "Front-end": "CP3 - Login Logout.",
    "Java": "CP3 - Checkpoint 3.",
    "Python": "CP3 - Laços e operações com matrizes.",
    "Banco de Dados": " CP3 - Projeto BD.",
    "Software Engineering": "CP3 - Checkpoint 3.",
  };
  const cp4: { [key: string]: string } = {
    "Front-end": "CP4 - SPA/ Livraria.",
    "Java": "CP4 - Checkpoint 4.",
    "Python": "CP4 - Subprogramas, estruturas de dados e imports.",
    "Banco de Dados": " CP4 - DDLs.",
    "Software Engineering": "CP4 - Checkpoint 4.",
  };
  const cp5: { [key: string]: string } = {
    "Front-end": "CP5 - Worlds in Collision.",
    "Java": "CP5 - Checkpoint 5.",
    "Python": "CP5 - Estruturas de dados, arquivos e variáveis de contexto.",
    "Banco de Dados": " CP5 - Comandos DML.",
    "Software Engineering": "CP5 - Checkpoint 5.",
  };
  const cp6: { [key: string]: string } = {
    "Front-end": "CP6 - Checkpoint 6.",
    "Java": "CP6 - Checkpoint 6.",
    "Python": "CP6 - Checkpoint 6.",
    "Banco de Dados": "CP6 - Checkpoint 6.",
    "Software Engineering": "CP6 - Checkpoint 6.",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-semibold mb-8 text-center">Checkpoints</h1>
      
      {disciplinas.map((disciplina) => (
        <section key={disciplina} className="mb-8">
          <h2 className="text-2xl font-semibold mb-1">{disciplina}</h2>
          <p className="text-gray-400 mb-4">{descricaoDisciplinas[disciplina]}</p>
          <h1 className="text-white">{cp1[disciplina]}</h1>
          <h1 className="text-white">{cp2[disciplina]}</h1>
          <h1 className="text-white">{cp3[disciplina]}</h1>
          <h1 className="text-white">{cp4[disciplina]}</h1>
          <h1 className="text-white">{cp5[disciplina]}</h1>
          <h1 className="text-white">{cp6[disciplina]}</h1> 
        </section>
      ))}
    </div>
  );
}