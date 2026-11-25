import { render, screen, fireEvent } from '@testing-library/react';

import { NovaTarefa } from '@/components/NovaTarefa/NovaTarefa';

describe('Componente NovaTarefa', () => {

  it('deve renderizar o campo de texto e o botão', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(
      screen.getByLabelText(/descrição da tarefa/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /adicionar tarefa/i,
      })
    ).toBeInTheDocument();
  });

  it('deve adicionar uma tarefa e limpar o campo', () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText(/descrição da tarefa/i);

    fireEvent.change(input, {
      target: { value: 'Estudar Jest' },
    });

    fireEvent.click(
      screen.getByRole('button', {
        name: /adicionar tarefa/i,
      })
    );

    expect(onAdicionar).toHaveBeenCalledWith('Estudar Jest');

    expect(input).toHaveValue('');
  });

  it('deve impedir o envio de uma tarefa contendo apenas espaços', () => {
    const onAdicionar = jest.fn();

    render(<NovaTarefa onAdicionar={onAdicionar} />);

    const input = screen.getByLabelText(/descrição da tarefa/i);

    fireEvent.change(input, {
      target: { value: '   ' },
    });

    const formulario = screen
      .getByRole('button', {
        name: /adicionar tarefa/i,
      })
      .closest('form');

    fireEvent.submit(formulario!);

    expect(screen.getByRole('alert')).toHaveTextContent(
      'Digite uma tarefa antes de adicionar.'
    );

    expect(onAdicionar).not.toHaveBeenCalled();
  });

});