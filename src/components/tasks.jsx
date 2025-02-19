import { useState } from 'react';

export const Tasks = () => {
  const [taskList] = useState(['Trabalhar', 'Estudar React']);

  return (
    <div className="text-red-400">
      {taskList.length !== 0
        ? taskList.map((task, index) => <p key={index}>{task}</p>)
        : 'Lista de tarefas vazia'}
    </div>
  );
};
