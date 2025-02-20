import PlusIcon from '../../assets/icons/add.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import { Button } from '../Button';
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
          <Button variant="secondary">
            <span>Limpar tarefas</span>
            <TrashIcon />
          </Button>
          <Button>
            <span>Nova tarefa</span>
            <PlusIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
