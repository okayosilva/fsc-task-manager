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
    done: 'bg-[#00ADB5] text-[#00ADB5]',
    in_progress: 'bg-[#FFAA04] text-[#FFAA04]',
    not_started: 'bg-[#35383E] bg-opacity-10 text-[#35383E]',
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
