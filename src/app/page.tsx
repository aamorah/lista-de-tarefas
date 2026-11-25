import { PainelTarefas } from "@/components/PainelTarefas/PainelTarefas";
import { buscarTarefasIniciais } from "@/data/tarefas";

export default function Home() {
  const tarefas = buscarTarefasIniciais();

  return <PainelTarefas tarefasIniciais={tarefas} />;
}
