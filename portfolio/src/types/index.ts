export type ChallengeType = {
    id: string;
    integranteId: string; 
    disciplina: string;
    sprint1?: string;
    notaSprint1?: string;
    dataSprint1?: string;
    sprint2?: string;
    notaSprint2?: string;
    dataSprint2?: string;
    sprint3?: string;
    notaSprint3?: string;
    dataSprint3?: string; 
    sprint4?: string;
    notaSprint4?: string;
    dataSprint4?: string;
  }
  
  export type GlobalSolutionType = {
    id: string;
    disciplina: string;
    semestre1: string;
    notaSemetre1: string;
    dataSemestre1?: string;
    semestre2?: string;
    notaSemetre2?: string;
    dataSemestre2?: string;
    integranteId: string;
  }
  
  export type CheckpointType = {
    id: string;
    disciplina: string;
    comentario?: string; 
    media: string;
    data?:string; 
    integranteId: string;   
  };
  

  export type IntegranteType = {
    id:string;
    nome: string;
    rm: string;
    github: string;
    imagem: string;
    
  }