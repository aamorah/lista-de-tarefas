"use client";

import { useState, type FormEvent } from "react";

interface NovaTarefaProps {
  onAdicionar: (titulo: string) => void;
}

export function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const tituloLimpo = titulo.trim();

    if (!tituloLimpo) {
      setErro("Digite uma tarefa antes de adicionar.");
      return;
    }

    onAdicionar(tituloLimpo);

    setTitulo("");
    setErro("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-field">
      <label className="form-label" htmlFor="titulo-tarefa">Descrição da tarefa</label>

      <input
      className="form-input"
        id="titulo-tarefa"
        type="text"
        value={titulo}
        onChange={(event) => {
          setTitulo(event.target.value);
          setErro("");
        }}
        placeholder="Ex.: Estudar React"
        required
        aria-invalid={Boolean(erro)}
        aria-describedby={erro ? "erro-tarefa" : undefined}
      />

      {erro && (
        <p className="form-error" id="erro-tarefa" role="alert">
          {erro}
        </p>
      )}
      </div>

      <button className="form-button" type="submit">Adicionar tarefa</button>
    </form>
  );
}
