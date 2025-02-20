import { Header } from '../Header';

export const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex justify-between">
        <Header.Root>
          <Header.SubTitle>Minhas Tarefas</Header.SubTitle>
          <Header.Title>Minhas Tarefas</Header.Title>
        </Header.Root>

        <div className="flex items-end gap-3">
          <button>Limpar tarefas</button>
          <button>Nova tarefa</button>
        </div>
      </div>
    </div>
  );
};
