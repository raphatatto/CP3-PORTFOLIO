"use client";

import { useEffect, useState } from "react";
import challengesData from "@/data/challenges.json";
import { ChallengeType } from "@/types";

export default function Challenges() {
  const [challenges, setChallenges] = useState<ChallengeType[]>([]);

  useEffect(() => {
    setChallenges(challengesData);
  }, []);

  const materias = ["Front-end", "Java", "Python", "Banco de Dados", "Software Engineering"];

  // Objeto de mapeamento para as descrições das matérias
  const descricaoMaterias: { [key: string]: string } = {
    "Front-end": "Desenvolvimento de interfaces interativas e responsivas.",
    "Java": "Linguagem de programação orientada a objetos amplamente utilizada.",
    "Python": "Linguagem de programação de fácil leitura e versátil.",
    "Banco de Dados": "Gerenciamento de dados e armazenamento estruturado.",
    "Software Engineering": "Engenharia de software e design de sistemas complexos.",
  };

  const challengeDescricao: {[key:string]: string} ={
    "Front-end": "Sprint 1 - Figma",
    "Java": "Sprint 1 - Diagrama UML das classes",
    "Python": "Linguagem de programação de fácil leitura e versátil.",
    "Banco de Dados": "Gerenciamento de dados e armazenamento estruturado.",
    "Software Engineering": "Engenharia de software e design de sistemas complexos.",
  };

  const challengeSprint1: {[key:string]: string} ={
    "Front-end": "Sprint 1 - Figma.",
    "Java": "Sprint 1 - Modelagem UML.",
    "Python": "Sprint 1 - Implementação de variáveis.",
    "Banco de Dados": "Sprint 1 - Modelagem do banco de dados (DER).",
    "Software Engineering": "Sprint 1 - Montagem do modelo de negócio.",
  };

  const challengeSprint2: {[key:string]: string} ={
    "Front-end": "Sprint 2 - Implementação do HTML, CSS e JavaScript.",
    "Java": "Sprint 2 - Implementação das classes.",
    "Python": "Sprint 2 - Criação do menu com opções de funções.",
    "Banco de Dados": "Sprint 2 - Criação do modelo físico do banco de dados.",
    "Software Engineering": "Sprint 2 - Gestão das atividades por cards (Metodologia Ágil).",
  };

  const challengeSprint3: {[key:string]: string} ={
    "Front-end": "Sprint 3 - Implementação do React com Vite.",
    "Java": "Sprint 3 - Implementação das classes DAO para conexão com o banco de dados eCRUD.",
    "Python": "Sprint 3 - Implementação do CRUD.",
    "Banco de Dados": "Sprint 3 - Criação do banco de dados com SQL.",
    "Software Engineering": "Sprint 3 - Diagrama de sequência e apreentação do protótipo.",
  };

  const challengeSprint4: {[key:string]: string} ={
    "Front-end": "Sprint 4 - Implementação de Next.js e consumo da API para conexão com o banco de dados",
    "Java": "Sprint 4 - Implementação dos métodos HTTP para exportação via API",
    "Python": "Sprint 4 - Consumo de API para utilização no programa.",
    "Banco de Dados": "Sprint 4 - Ajustes e implementação de novos métodos no banco de dados.",
    "Software Engineering": "Sprint 4 - Plano de negócios completo.",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-semibold mb-8 text-center">Challenges</h1>
      
      {materias.map((materia) => (
        <section key={materia} className="mb-8">
          <h2 className="text-2xl font-semibold mb-1">{materia}</h2>
          <p className="text-gray-400 mb-4">{descricaoMaterias[materia]}</p> 
          <h1 className="text-white">{challengeSprint1[materia]}</h1>
          <h1 className="text-white">{challengeSprint2[materia]}</h1>
          <h1 className="text-white">{challengeSprint3[materia]}</h1>
          <h1 className="text-white">{challengeSprint4[materia]}</h1>
        </section>
      ))}
    </div>
  );
}
