import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import checkpointsData from '@/data/checkpoints.json';

// Função para salvar dados no arquivo JSON após uma alteração
function saveDataToFile(data: any) {
  const filePath = path.join(process.cwd(), 'src/data/checkpoints.json');
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updatedCheckpoint = req.body;
    const index = checkpointsData.findIndex(cp => cp.id === id);

    if (index !== -1) {
      checkpointsData[index] = { ...checkpointsData[index], ...updatedCheckpoint };
      saveDataToFile(checkpointsData); // Salva as mudanças no arquivo JSON
      res.status(200).json({ message: 'Checkpoint atualizado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Checkpoint não encontrado' });
    }
  } else if (req.method === 'DELETE') {
    const index = checkpointsData.findIndex(cp => cp.id === id);

    if (index !== -1) {
      checkpointsData.splice(index, 1); 
      saveDataToFile(checkpointsData); // Salva as mudanças no arquivo JSON
      res.status(200).json({ message: 'Checkpoint deletado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Checkpoint não encontrado' });
    }
  } else {
    res.setHeader('Allow', ['PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
