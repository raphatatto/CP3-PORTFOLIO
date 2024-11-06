"use client";

import Link from "next/link";
import { IntegranteType } from "@/types";
import { useState, useEffect } from "react";

import integrantesData from "@/data/integrantes.json";

export default function Integrantes() {
  const [integrantes, setIntegrantes] = useState<IntegranteType[]>([]);


  useEffect(() => {
    setIntegrantes(integrantesData); 
  }, []);

  return (
    <main className="max-w-6xl mx-auto p-4 text-center">
      <h1 className="my-4 text-4xl font-semibold">Integrantes</h1>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {integrantes.map((integrante) => (
          <li key={integrante.id} className="flex flex-col items-center gap-2 border p-4 rounded shadow-md w-48">
            <h2 className="text-lg font-medium">{integrante.nome}</h2>
            <Link href={`/integrantes/${integrante.nome.toLowerCase()}`} className="text-blue-500 hover:underline">
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
