import PlusIcon from '../../assets/icons/add.svg?react';
import CloudIcon from '../../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../../assets/icons/moon.svg?react';
import SunIcon from '../../assets/icons/sun.svg?react';
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

      <div className="mt-6 flex flex-col gap-3 gap-6 rounded-xl bg-white p-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <SunIcon />
            <p className="text-sm font-bold text-[#9A9C9F]">Manhã</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <CloudIcon />
            <p className="text-sm font-bold text-[#9A9C9F]">Tarde</p>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
            <MoonIcon />
            <p className="text-sm font-bold text-[#9A9C9F]">Noite</p>
          </div>
        </div>
      </div>
    </div>
  );
};
