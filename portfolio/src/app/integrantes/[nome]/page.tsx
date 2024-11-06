"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import challengesData from "@/data/challenges.json";
import globalsData from "@/data/globals.json";
import checkpointsData from "@/data/checkpoints.json";
import integrantesData from "@/data/integrantes.json";


import { ChallengeType, GlobalSolutionType, CheckpointType, IntegranteType } from "@/types";

export default function IntegrantePage() {
  const { nome } = useParams();

  const [integrante, setIntegrante] = useState<IntegranteType | null>(null);
  const [challenges, setChallenges] = useState<ChallengeType[]>([]);
  const [globals, setGlobals] = useState<GlobalSolutionType[]>([]);
  const [checkpoints, setCheckpoints] = useState<CheckpointType[]>([]);

  useEffect(() => {
    const integranteData = integrantesData.find(
      (integrante) => integrante.nome.toLowerCase() === nome?.toString().toLowerCase()
    );
    setIntegrante(integranteData || null);

    if (integranteData) {
      setChallenges(challengesData.filter((c) => c.integranteId === integranteData.id));
      setGlobals(globalsData.filter((g) => g.integranteId === integranteData.id));
      setCheckpoints(checkpointsData.filter((cp) => cp.integranteId === integranteData.id));
    }
  }, [nome]);

  if (!integrante) {
    return <p className="text-center mt-10">Integrante não encontrado.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-4xl font-semibold mb-4">Perfil de {integrante.nome}</h1>
      <p className="text-xl mb-8">RM: {integrante.rm}</p>

      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        <ul className="space-y-4">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="p-4 bg-gray-800 rounded-md shadow">
              <h3 className="text-lg font-semibold">{challenge.disciplina}</h3>
                  <p>{challenge.sprint1}</p>
                  <p><strong>Nota:</strong> {challenge.notaSprint1}</p>
                  <p>{challenge.dataSprint1}</p>
                  <p>{challenge.sprint2}</p>
                  <p><strong>Nota:</strong> {challenge.notaSprint2}</p>
                  <p>{challenge.dataSprint2}</p>
                  <p>{challenge.sprint3}</p>
                  <p><strong>Nota:</strong> {challenge.notaSprint3}</p>
                  <p>{challenge.dataSprint3}</p>
                  <p>{challenge.sprint4}</p>
                  <p><strong>Nota:</strong> {challenge.notaSprint4}</p>
                  <p>{challenge.dataSprint4}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Global Solutions</h2>
        <ul className="space-y-4">
          {globals.map((global) => (
            <li key={global.id} className="p-4 bg-gray-800 rounded-md shadow">
              <h3 className="text-lg font-semibold">{global.disciplina}</h3>
              <p>{global.semestre1}</p>
              <p className="text-green-200">Nota Semestre 1: {global.notaSemetre1}</p>
              <p>{global.semestre2}</p>
              <p className="text-green-200">Nota Semestre 2: {global.notaSemetre2}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Checkpoints</h2>
        <ul className="space-y-4">
          {checkpoints.map((checkpoint) => (
            <li key={checkpoint.id} className="p-4 bg-gray-800 rounded-md shadow">
              <h3 className="text-lg font-semibold">{checkpoint.disciplina}</h3>
              <p className="text-green-200">Datas: {checkpoint.data}</p>
              <p className="text-green-200">Comentario: {checkpoint.comentario}</p>
              <p className="text-green-200">Datas: {checkpoint.data}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
