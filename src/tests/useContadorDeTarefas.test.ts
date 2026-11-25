import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";
import type { Tarefa } from "@/types/tarefa";

describe("Hook useContadorDeTarefas", () => {
  it("deve retornar a quantidade atual de tarefas", () => {
    const tarefas: Tarefa[] = [
      { id: 1, titulo: "Estudar React" },
      { id: 2, titulo: "Estudar TypeScript" },
      { id: 3, titulo: "Praticar Jest" },
    ];

    const { result } = renderHook(() => useContadorDeTarefas(tarefas));

    expect(result.current).toBe(3);
  });

  it("deve retornar zero quando a lista estiver vazia", () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));

    expect(result.current).toBe(0);
  });
});
