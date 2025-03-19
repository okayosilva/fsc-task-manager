import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { baseUrl } from '../api/baseUrl';

export const TaskDetails = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getTaskById = async (taskId) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}/tasks/${taskId}`, {
      method: 'GET',
    });
    const task = await response.json();

    setTask(task);
    setIsLoading(false);
  };

  useEffect(() => {
    getTaskById(taskId);
  }, [taskId]);

  return <div className="">{isLoading ? 'carregando' : task?.title}</div>;
};
