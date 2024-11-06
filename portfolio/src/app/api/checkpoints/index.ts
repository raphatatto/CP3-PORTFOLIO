import { NextApiRequest, NextApiResponse } from 'next';
import checkpointsData from '@/data/checkpoints.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(checkpointsData); 
  } else if (req.method === 'POST') {
    const newCheckpoint = req.body;
    checkpointsData.push(newCheckpoint); 
    res.status(201).json({ message: 'Checkpoint adicionado com sucesso!' });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
