import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import { baseUrl } from '../../api/baseUrl';
import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from '../../assets/icons';
import { Button } from '../Button';

export const TaskItem = ({ task, handleStatusChange, onDeleteSuccess }) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false);

  const { id, title, status } = task;
  const checked = status === 'done';
  const inProgress = status === 'in_progress';

  const statusColors = {
    done: 'bg-brand-primary text-brand-primary',
    in_progress: 'bg-brand-process text-brand-process',
    not_started: 'bg-brand-dark-blue bg-opacity-10 text-brand-dark-blue',
  };

  const getStatusClasses = () => {
    if (status === 'done') return statusColors.done;

    if (status === 'in_progress') return statusColors.in_progress;

    if (status === 'not_started') return statusColors.not_started;

    return statusColors.not_started;
  };

  const onDeleteClick = async (id) => {
    setDeleteIsLoading(true);
    try {
      const response = await fetch(`${baseUrl}/tasks/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        toast.error('Erro ao deletar tarefa ❌');
        setDeleteIsLoading(false);
        throw new Error(`Erro ao criar a tarefa: ${response.statusText}`);
      }

      onDeleteSuccess(id);
      setDeleteIsLoading(false);
    } catch (error) {
      toast.error('Erro ao deletar tarefa ❌');
      setDeleteIsLoading(false);
      throw error;
    }
  };

  return (
    <div
      className={`flex items-center rounded-lg bg-opacity-10 px-4 py-3 text-sm ${getStatusClasses()} justify-between transition`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleStatusChange(id)}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {checked && <CheckIcon />}
          {inProgress && <LoaderIcon className="animate-spin text-white" />}
        </label>
        {title}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button
          onClick={() => onDeleteClick(id)}
          color="danger"
          disabled={deleteIsLoading}
        >
          {deleteIsLoading ? (
            <LoaderIcon className="animate-spin text-brand-dark-blue" />
          ) : (
            <TrashIcon />
          )}
        </Button>
        <Link to={`/task/${id}`} className="transition-all hover:opacity-75">
          <DetailsIcon />
        </Link>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.oneOf(['morning', 'afternoon', 'evening']).isRequired,
    status: PropTypes.oneOf(['done', 'in_progress', 'not_started']).isRequired,
  }).isRequired,
  isLoading: PropTypes.bool,
  handleStatusChange: PropTypes.func.isRequired,
  onDeleteSuccess: PropTypes.func.isRequired,
};
