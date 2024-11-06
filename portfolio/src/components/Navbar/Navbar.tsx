import Link from "next/link";
import { FaUsers, FaFlag, FaGlobe, FaTasks } from "react-icons/fa";

export default function Navbar() {
  const links = [
    { label: "Integrantes", href: "/", icon: <FaUsers size={24} /> }, // Ícone maior
    { label: "Checkpoints", href: "/checkpoints", icon: <FaFlag size={24} /> },
    { label: "Global Solutions", href: "/globals", icon: <FaGlobe size={24} /> },
    { label: "Challenges", href: "/challenges", icon: <FaTasks size={24} /> },
  ];

  return (
    <header className="w-full bg-gray-900 py-4">
      <nav className="max-w-6xl mx-auto">
        <ul className="m-5 flex justify-center gap-10 text-xl text-white"> 
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="flex items-center gap-2 hover:text-yellow-400">
                <span>{link.icon}</span> 
                <span className="font-semibold">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
