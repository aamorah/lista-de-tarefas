import type { Tarefa } from "@/types/tarefa";

export function useContadorDeTarefas(tarefas: Tarefa[]): number {
  return tarefas.length;
}
