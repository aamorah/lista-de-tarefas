"use client";

import { useState } from "react";

import { NovaTarefa } from "../NovaTarefa/NovaTarefa";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

import type { Tarefa } from "@/types/tarefa";

interface PainelTarefasProps {
  tarefasIniciais: Tarefa[];
}

export function PainelTarefas({ tarefasIniciais }: PainelTarefasProps) {
  // Estado principal da aplicação
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

  // Contador atualizado conforme a lista muda
  const quantidade = useContadorDeTarefas(tarefas);

  // Função responsável por adicionar novas tarefas
  function adicionarTarefa(titulo: string): void {
    setTarefas((tarefasAtuais: Tarefa[]) => {
      const proximoId =
        tarefasAtuais.reduce(
          (maiorId: number, tarefa: Tarefa) => Math.max(maiorId, tarefa.id),
          0,
        ) + 1;

      return [
        ...tarefasAtuais,
        {
          id: proximoId,
          titulo,
        },
      ];
    });
  }

  return (
    <main className="app-shell">
      <section className="task-card" aria-labelledby="titulo-principal">
        <header className="task-header">
          <p className="eyebrow">ORGANIZAÇÃO PESSOAL</p>
          <h1 className="task-title" id="titulo-principal">Minha lista de tarefas</h1>

          <p className="task-description">Organize suas atividades e acompanhe seu progresso.</p>

          <p className="task-count" aria-live="polite">
            {quantidade} {quantidade === 1 ? "tarefa" : "tarefas"}
          </p>
        </header>

        <NovaTarefa onAdicionar={adicionarTarefa} />

        <ul className="task-list">
          {tarefas.map((tarefa) => (
            <li className="task-item" key={tarefa.id}> <span className="task-indicator" aria-hidden="true" />
            <span>{tarefa.titulo}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
