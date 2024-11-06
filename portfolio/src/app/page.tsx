"use client";

import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

export default function Integrantes() {
  const integrantes = [
    { nome: "Nicolas", rm: "333", github: "https://github.com/", imagem: "https://placehold.co/200" },
    { nome: "Lucas", rm: "123", github: "https://github.com/", imagem: "https://placehold.co/200" },
    { nome: "Lucy", rm: "343", github: "https://github.com/", imagem: "https://placehold.co/200" },
    { nome: "Raphaela", rm: "554983", github: "https://github.com/", imagem: "https://placehold.co/200" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <main className="flex-grow flex flex-col items-center w-full ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
          {integrantes.map((integrante) => (
            <div key={integrante.rm} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
              <div className="w-40 h-40 bg-gray-600 rounded-full overflow-hidden mb-4">
                <Image src={integrante.imagem} alt={integrante.nome} width={160} height={160} className="object-cover" />
              </div>
              <Link href={`/integrantes/${integrante.nome.toLowerCase()}`}>
                <h2 className="text-2xl font-medium text-white mb-2 cursor-pointer hover:text-yellow-400">{integrante.nome}</h2>
              </Link>
              <p className="text-gray-400 mb-4">RM: {integrante.rm}</p>
              <a
                href={integrante.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-2 mt-auto bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-600 transition"
              >
                <FaGithub className="mr-2" size={18} />
                GitHub
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
