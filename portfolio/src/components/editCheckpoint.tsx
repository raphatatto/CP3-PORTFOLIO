import { useState } from "react";

type FormDataType = {
  disciplina: string;
  comentario: string;
  media: string;
  data: string;
};

export default function EditCheckpoint({ id, currentData }: { id: string; currentData: FormDataType }) {
  const [formData, setFormData] = useState<FormDataType>({
    disciplina: currentData.disciplina,
    comentario: currentData.comentario,
    media: currentData.media,
    data: currentData.data,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(`/api/checkpoints/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Checkpoint atualizado com sucesso!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="disciplina" value={formData.disciplina} onChange={handleChange} placeholder="Disciplina" />
      <input name="comentario" value={formData.comentario} onChange={handleChange} placeholder="Comentário" />
      <input name="media" value={formData.media} onChange={handleChange} placeholder="Média" />
      <input name="data" value={formData.data} onChange={handleChange} placeholder="Data" />
      <button type="submit">Atualizar Checkpoint</button>
    </form>
  );
}
