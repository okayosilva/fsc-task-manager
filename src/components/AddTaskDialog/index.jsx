import { createPortal } from 'react-dom';

import { Button } from '../Button';
import { Input } from '../Input';

export const AddTaskDialog = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
      <div className="rounded-xl bg-white p-5 text-center shadow">
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
          Insira as informações abaixo
        </p>

        <div className="flex w-[336px] flex-col space-y-4">
          <Input
            id="title"
            label="Título"
            placeholder="Insira o título da tarefa"
          />
          <Input id="time" label="Horário" placeholder="Horário" />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />
          <div className="flex w-full gap-3">
            <Button
              variant="secondary"
              size="large"
              className="w-full"
              onClick={onClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Criar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
