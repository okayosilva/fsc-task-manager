import HomeIcon from '../../assets/icons/home.svg?react';
import TasksIcon from '../../assets/icons/tasks.svg?react';
import { SidebarButton } from './sidebarButton';

export const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00adb5]">Task Manager</h1>
        <p>
          um simples{' '}
          <span className="text-[#00adb5]">organizador de tarefas.</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton>
          <HomeIcon />
          <span>Início</span>
        </SidebarButton>
        <SidebarButton variant="selected">
          <TasksIcon />
          <span>Minhas Tarefas</span>
        </SidebarButton>
      </div>
    </div>
  );
};
