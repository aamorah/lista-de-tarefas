import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { PainelTarefas } from "@/components/PainelTarefas/PainelTarefas";

describe(" Página inicial", () => {

    it("deve renderizar o título da aplicação", () => {
        render(<Home />);

        expect(
            screen.getByRole("heading", {
                name: /minha lista de tarefas/i,
            })
        ).toBeInTheDocument();
    });

    it("deve exibir as tarefas iniciais", () => {
        render(<Home />);

        expect(
            screen.getByText("Estudar JavaScript")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Praticar TypeScript")
        ).toBeInTheDocument();

        expect(
            screen.getByText("Desenvolver um projeto com Next.js")
        ).toBeInTheDocument();
    });

    it("deve exibir a quantidade inicial de tarefas", () => {
        render(<Home />);

        expect(
            screen.getByText("3 tarefas")
        ).toBeInTheDocument();
    });

    it('deve adicionar uma tarefa e atualizar o contador', () => {
        render(<Home />);
      
        const input = screen.getByLabelText(
          /descrição da tarefa/i
        );
      
        fireEvent.change(input, {
          target: {
            value: 'Estudar testes de integração',
          },
        });
      
        fireEvent.click(
          screen.getByRole('button', {
            name: /adicionar tarefa/i,
          })
        );
      
        expect(
          screen.getByText('Estudar testes de integração')
        ).toBeInTheDocument();
      
        expect(
          screen.getByText('4 tarefas')
        ).toBeInTheDocument();
      });

      it('deve exibir tarefa no singular quando houver apenas uma', () => {
        render(
          <PainelTarefas
            tarefasIniciais={[
              {
                id: 1,
                titulo: 'Estudar React',
              },
            ]}
          />
        );
      
        expect(screen.getByText('1 tarefa')).toBeInTheDocument();
      });
});