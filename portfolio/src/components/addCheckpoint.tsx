import { useState } from "react";

export default function AddCheckpoint() {
  const [formData, setFormData] = useState({
    disciplina: "",
    comentario: "",
    media: "",
    data: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/checkpoints', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Checkpoint adicionado com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="disciplina" onChange={handleChange} placeholder="Disciplina" />
      <input name="comentario" onChange={handleChange} placeholder="Comentário" />
      <input name="media" onChange={handleChange} placeholder="Média" />
      <input name="data" onChange={handleChange} placeholder="Data" />
      <button type="submit">Adicionar Checkpoint</button>
    </form>
  );
}
