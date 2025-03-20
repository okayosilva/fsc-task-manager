import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

import { baseUrl } from '../api/baseUrl';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from '../assets/icons';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Sidebar } from '../components/Sidebar';
import { TimeSelect } from '../components/TimeSelect';

export const TaskDetails = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingToUpdate, setIsLoadingToUpdate] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  const titleRef = useRef();
  const timeRef = useRef();
  const descriptionRef = useRef();

  const titleError = errors.find((error) => error.inputName === 'title');
  const descriptionError = errors.find(
    (error) => error.inputName === 'description'
  );

  const onResetFormToOriginalValues = () => {
    if (titleRef.current) titleRef.current.value = task?.title || '';
    if (timeRef.current) timeRef.current.value = task?.time || '';
    if (descriptionRef.current)
      descriptionRef.current.value = task?.description || '';

    setErrors([]);
  };

  const handleCancelClick = () => onResetFormToOriginalValues();

  const handleUpdateTask = async (task) => {
    setIsLoadingToUpdate(true);
    try {
      const response = await fetch(`${baseUrl}/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        toast.error('Erro ao atualizar tarefa ❌');
        setIsLoadingToUpdate(false);
        throw new Error(`Erro ao atualizar tarefa: ${response.statusText}`);
      }

      setTask(task);
      setIsLoadingToUpdate(false);
      toast.success('Tarefa atualizada com sucesso ✅');
    } catch (error) {
      setIsLoadingToUpdate(false);
      toast.error('Ocorreu um erro ao atualizar sua tarefa ❌');
      throw error;
    }
  };

  const handleClickToUpdateTask = () => {
    const title = titleRef?.current?.value;
    const description = descriptionRef?.current?.value;

    let newErrors = [];

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

    handleUpdateTask({
      title,
      description,
      time: timeRef?.current.value,
    });
  };

  const handleDeleteTask = async () => {
    try {
      const response = await fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        toast.error('Erro ao deletar tarefa ❌');
        throw new Error(`Erro ao atualizar tarefa: ${response.statusText}`);
      }

      navigate(-1);
      toast.success('Tarefa deletada com sucesso ✅');
    } catch (error) {
      toast.error('Erro ao deletar tarefa ❌');
      throw error;
    }
  };

  const getTaskById = async (taskId) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}/${taskId}`, {
      method: 'GET',
    });
    const task = await response.json();

    setTask(task);
    setIsLoading(false);
  };

  useEffect(() => {
    getTaskById(taskId);
  }, [taskId]);

  return (
    <div className="flex">
      <Sidebar />
      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <LoaderIcon className="h-12 w-12 animate-spin text-brand-primary" />
        </div>
      ) : (
        <div className="w-full space-y-6 px-8 py-16">
          <div className="flex w-full items-end justify-between">
            <div className="">
              <div>
                <button
                  onClick={handleBackClick}
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary"
                >
                  <ArrowLeftIcon />
                </button>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <span
                  className="cursor-pointer text-brand-text-gray"
                  onClickCapture={handleBackClick}
                >
                  Minhas Tarefas
                </span>
                <ChevronRightIcon className="text-brand-text-gray" />
                <span className="font-semibold text-brand-primary">
                  {task?.title}
                </span>
              </div>
              <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
            </div>

            <Button className="h-fit" color="delete" onClick={handleDeleteTask}>
              <TrashIcon />
              Deletar Tarefa
            </Button>
          </div>

          <div className="space-y-6 rounded-xl bg-white p-6">
            <div className="">
              <Input
                id="title"
                label="Título"
                defaultValue={task?.title}
                ref={titleRef}
                disabled={isLoadingToUpdate}
                errorMessage={titleError?.message}
              />
            </div>
            <div className="">
              <TimeSelect
                ref={timeRef}
                defaultValue={task?.time}
                disabled={isLoadingToUpdate}
              />
            </div>
            <div className="">
              <Input
                id="description"
                label="Descrição"
                defaultValue={task?.description}
                ref={descriptionRef}
                disabled={isLoadingToUpdate}
                errorMessage={descriptionError?.message}
              />
            </div>
          </div>

          <div className="flex w-full justify-end gap-3">
            <Button
              size="large"
              color="secondary"
              disabled={isLoadingToUpdate}
              onClick={handleCancelClick}
            >
              Cancelar
            </Button>
            <Button
              size="large"
              className="w-full max-w-20"
              onClick={handleClickToUpdateTask}
              disabled={isLoadingToUpdate}
            >
              {isLoadingToUpdate ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                'Salvar'
              )}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
