import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { CheckpointType } from "@/types"; 


let checkpoints = require('@/data/checkpoints.json');


const filePath = path.resolve('src/data/checkpoints.json');

const saveDataToFile = () => {
  fs.writeFileSync(filePath, JSON.stringify(checkpoints, null, 2));
};


export async function GET() {
  return NextResponse.json(checkpoints);
}


export async function POST(request: Request) {
  const newCheckpoint = await request.json();
  checkpoints.push(newCheckpoint);
  saveDataToFile();
  return NextResponse.json({ message: 'Checkpoint adicionado com sucesso!' });
}


export async function DELETE(request: Request) {
  const { id } = await request.json();
  checkpoints = checkpoints.filter((cp: CheckpointType) => cp.id !== id);
  saveDataToFile();
  return NextResponse.json({ message: 'Checkpoint deletado com sucesso!' });
}

export async function PUT(request: Request) {
  const updatedCheckpoint = await request.json();
  checkpoints = checkpoints.map((cp: CheckpointType) =>
    cp.id === updatedCheckpoint.id ? updatedCheckpoint : cp
  );
  saveDataToFile();
  return NextResponse.json({ message: 'Checkpoint atualizado com sucesso!' });
}
