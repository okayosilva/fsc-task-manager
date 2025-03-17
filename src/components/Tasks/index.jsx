import { useState } from 'react';
import { toast } from 'sonner';

import {
  CloudIcon,
  MoonIcon,
  PlusIcon,
  SunIcon,
  TrashIcon,
} from '../../assets/icons';
import { TASKS } from '../../constants/tasks';
import { Button } from '../Button';
import { Header } from '../Header';
import { TaskItem } from './taskItem';
import { TaskSeparator } from './taskSeperator';

export const Tasks = () => {
  const [task, setTask] = useState(TASKS);

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
        return { ...currentTask, status: 'done' };
      }

      return currentTask;
    });

    setTask(newTasks);
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = task.filter((task) => task.id !== taskId);
    toast('Tarefa deletada com sucesso 🎉');
    setTask(newTasks);
  };

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
