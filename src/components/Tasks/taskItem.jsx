import {
  CheckIcon,
  DetailsIcon,
  LoaderIcon,
  TrashIcon,
} from '../../assets/icons';
import { Button } from '../Button';

export const TaskItem = ({ task, handleStatusChange, handleDelete }) => {
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
          {inProgress && <LoaderIcon className="animate-spin" />}
        </label>
        {title}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Button onClick={() => handleDelete(id)} variant="danger">
          <TrashIcon />
        </Button>
        <a href="#" className="transition-all hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};
