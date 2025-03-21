import './addTaskDialog.css';

import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'sonner';
import { v4 } from 'uuid';

import { baseUrl } from '../../api/baseUrl';
import { LoaderIcon } from '../../assets/icons';
import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { Input } from '../Input';
import { TimeSelect } from '../TimeSelect';

export const AddTaskDialog = ({ isOpen, onClose, onCreateTaskSuccess }) => {
  const [errors, setErrors] = useState([]);
  const [createTaskIsLoading, setCreateTaskIsLoading] = useState(false);

  const nodeRef = useRef();
  const titleRef = useRef();
  const timeRef = useRef();
  const descriptionRef = useRef();

  const handleCreateTask = async (task) => {
    setCreateTaskIsLoading(true);
    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        toast.error('Erro ao criar tarefa ❌');
        setCreateTaskIsLoading(false);
        throw new Error(`Erro ao criar a tarefa: ${response.statusText}`);
      }
      onCreateTaskSuccess(task);
      setCreateTaskIsLoading(false);
      onClose();
    } catch (error) {
      console.log(error);
      onClose();
      toast.error('Erro ao criar tarefa ❌');
      setCreateTaskIsLoading(false);
      throw error;
    }
  };

  const handleCreateClick = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        inputName: 'title',
        message: 'O Título é obrigatório.',
      });
    }

    if (!description.trim()) {
      newErrors.push({
        inputName: 'description',
        message: 'A Descrição é obrigatória.',
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return;
    }

    handleCreateTask({
      id: v4(),
      title,
      time: timeRef.current.value,
      description,
      status: 'not_started',
    });
  };

  const titleError = errors.find((error) => error.inputName === 'title');
  const descriptionError = errors.find(
    (error) => error.inputName === 'description'
  );

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
          <Dialog.Root ref={nodeRef}>
            <Dialog.Body>
              <Dialog.Title>Nova Tarefa</Dialog.Title>
              <Dialog.SubTitle>Insira as informações abaixo</Dialog.SubTitle>

              <Dialog.Content>
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  ref={titleRef}
                  disabled={createTaskIsLoading}
                  errorMessage={titleError?.message}
                />

                <TimeSelect ref={timeRef} disabled={createTaskIsLoading} />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  ref={descriptionRef}
                  disabled={createTaskIsLoading}
                  errorMessage={descriptionError?.message}
                />

                <div className="flex w-full gap-3">
                  <Button
                    color="secondary"
                    size="large"
                    className="w-full"
                    onClick={onClose}
                    disabled={createTaskIsLoading}
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleCreateClick}
                    disabled={createTaskIsLoading}
                  >
                    {createTaskIsLoading ? (
                      <LoaderIcon className="animate-spin text-white" />
                    ) : (
                      'Criar Tarefa'
                    )}
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Body>
          </Dialog.Root>,
          document.body
        )}
      </>
    </CSSTransition>
  );
};
