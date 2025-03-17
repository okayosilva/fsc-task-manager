import './addTaskDialog.css';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'sonner';
import { v4 } from 'uuid';

import { Button } from '../Button';
import { Input } from '../Input';
import { TimeSelect } from '../TimeSelect';

export const AddTaskDialog = ({ isOpen, onClose, handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const nodeRef = useRef();

  const handleCreateClick = () => {
    if (!title.trim() || !description.trim()) {
      return toast.error('Preencha todos os campos ❌');
    }

    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: 'not_started',
    });

    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setTime('morning');
      setDescription('');
    }
  }, [isOpen]);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={300}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
          >
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
                Insira as informações abaixo
              </p>

              <div className="flex w-[336px] flex-col space-y-4">
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <TimeSelect
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleCreateClick}
                  >
                    Criar Tarefa
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    </CSSTransition>
  );
};
