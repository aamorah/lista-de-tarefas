import type { Tarefa } from "@/types/tarefa";

const tarefasSimuladas: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar JavaScript",
  },
  {
    id: 2,
    titulo: "Praticar TypeScript",
  },
  {
    id: 3,
    titulo: "Desenvolver um projeto com Next.js",
  },
];

export function buscarTarefasIniciais(): Tarefa[] {
  return tarefasSimuladas.map((tarefa) => ({
    ...tarefa,
  }));
}
