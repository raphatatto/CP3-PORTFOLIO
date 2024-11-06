"use client";

import { useEffect, useState } from "react";
import globalsData from "@/data/globals.json";
import { GlobalSolutionType } from "@/types";

export default function Globals() {
  const [globals, setGlobals] = useState<GlobalSolutionType[]>([]);

  useEffect(() => {
    setGlobals(globalsData);
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

  const globalSolution1: { [key: string]: string } = {
    "Front-end": "GS 1 - Criação de página web com HTML, CSS e JavaScript.",
    "Java": "GS 1 - Criação de programa implementando classes.",
    "Python": "GS 1 - Criação do código fonte contendo funções e estruturas de repetição.",
    "Banco de Dados": "GS 1 - Construção do DER edo Modelo Relacional.",
    "Software Engineering": "GS 1 - Engenharia de software e design de sistemas complexos.",
  };

  const globalSolution2: { [key: string]: string } = {
    "Front-end": "GS 2 - Criação de página web com HTML, CSS e JavaScript.",
    "Java": "GS 2 - Criação de programa implementando classes.",
    "Python": "GS 2 - Criação do código fonte contendo funções e estruturas de repetição.",
    "Banco de Dados": "GS 2 - Construção do DER edo Modelo Relacional.",
    "Software Engineering": "GS 2 - Engenharia de software e design de sistemas complexos.",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-semibold mb-8 text-center">Global Solutions</h1>
      
      {materias.map((materia) => (
        <section key={materia} className="mb-8">
          <h2 className="text-2xl font-semibold mb-1">{materia}</h2>
          <p className="text-gray-400 mb-4">{descricaoMaterias[materia]}</p>
          <h1 className="text-white">{globalSolution1[materia]}</h1>
        </section>
      ))}
    </div>
  );
}