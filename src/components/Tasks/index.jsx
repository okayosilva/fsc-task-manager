import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { baseUrl } from '../../api/baseUrl';
import {
  CloudIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TrashIcon,
} from '../../assets/icons';
import { AddTaskDialog } from '../AddTaskDialog';
import { Button } from '../Button';
import { Header } from '../Header';
import { TaskItem } from './taskItem';
import { TaskSeparator } from './taskSeperator';
export const Tasks = () => {
  const [task, setTask] = useState([]);
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false);

  const getTaskList = async () => {
    const response = await fetch(`${baseUrl}/tasks`, {
      method: 'GET',
    });

    const tasks = await response.json();
    setTask(tasks);
  };

  const createTask = async (task) => {
    try {
      const response = await fetch(`${baseUrl}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        toast.error('Erro ao criar tarefa ❌');
        throw new Error(`Erro ao criar a tarefa: ${response.statusText}`);
      }

      toast.success('Tarefa criada com sucesso 🎉');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao criar tarefa ❌');
      throw error;
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        toast.error('Erro ao deletar tarefa ❌');
        throw new Error(`Erro ao criar a tarefa: ${response.statusText}`);
      }

      toast('Tarefa deletada com sucesso 🎉');
    } catch (error) {
      toast.error('Erro ao deletar tarefa ❌');
      throw error;
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  const morningTasks = task.filter((task) => task.time === 'morning');
  const afternoonTasks = task.filter((task) => task.time === 'afternoon');
  const eveningTasks = task.filter((task) => task.time === 'evening');

  const handleTaskStatusChange = (taskId) => {
    const newTasks = task.map((currentTask) => {
      if (currentTask.id !== taskId) return currentTask;

      if (currentTask.status === 'not_started') {
        toast.success('Tarefa iniciada com sucesso!');
        return { ...currentTask, status: 'in_progress' };
      }

      if (currentTask.status === 'in_progress') {
        toast.success('Tarefa concluída com sucesso ✅');
        return { ...currentTask, status: 'done' };
      }

      if (currentTask.status === 'done') {
        toast.success('Tarefa reiniciada com sucesso 🚀');
        return { ...currentTask, status: 'not_started' };
      }

      return currentTask;
    });

    setTask(newTasks);
  };

  const handleTaskDelete = (taskId) => {
    deleteTask(taskId).then(() => {
      const newTasks = task.filter((task) => task.id !== taskId);
      setTask(newTasks);
    });
  };

  const handleAddTaskSubmit = (task) => {
    createTask(task).then(() => {
      setTask((prevState) => [...prevState, task]);
    });
  };

  return (
    <div className="w-full px-8 py-16">
      <div className="flex justify-between">
        <Header.Root>
          <Header.SubTitle>Minhas Tarefas</Header.SubTitle>
          <Header.Title>Minhas Tarefas</Header.Title>
        </Header.Root>

        <div className="flex items-end gap-3">
          <Button color="ghost">
            <span>Limpar tarefas</span>
            <TrashIcon />
          </Button>
          <Button onClick={() => setAddTaskDialogIsOpen(true)}>
            <span>Nova tarefa</span>
            <PlusIcon />
          </Button>
        </div>
        <AddTaskDialog
          isOpen={addTaskDialogIsOpen}
          onClose={() => setAddTaskDialogIsOpen(false)}
          handleSubmit={handleAddTaskSubmit}
        />
      </div>

      <div className="mt-6 flex flex-col gap-6 rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusChange={handleTaskStatusChange}
              handleDelete={handleTaskDelete}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudIcon />} />
          {afternoonTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusChange={handleTaskStatusChange}
              handleDelete={handleTaskDelete}
            />
          ))}
        </div>
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              handleStatusChange={handleTaskStatusChange}
              handleDelete={handleTaskDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
