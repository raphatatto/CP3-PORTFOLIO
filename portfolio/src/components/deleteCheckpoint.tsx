export default function DeleteCheckpoint({ id }: { id: string }) {
    const handleDelete = async () => {
      const res = await fetch(`/api/checkpoints/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        alert('Checkpoint deletado com sucesso!');
      }
    };
  
    return (
      <button onClick={handleDelete}>Deletar Checkpoint</button>
    );
  }
  