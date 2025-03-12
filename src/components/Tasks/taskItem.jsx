import CheckIcon from '../../assets/icons/check.svg?react';
import DetailsIcon from '../../assets/icons/details.svg?react';
import LoaderIcon from '../../assets/icons/loader-circle.svg?react';

export const TaskItem = ({ task }) => {
  const { title, status } = task;
  const checked = status === 'done';
  const inProgress = status === 'in_progress';

  const getStatusClasses = () => {
    if (status === 'done') return 'bg-[#00ADB5] text-[#00ADB5]';

    if (status === 'in_progress') return 'bg-[#FFAA04]  text-[#FFAA04]';

    if (status === 'not_started')
      return 'bg-[#35383E] bg-opacity-10 text-[#35383E]';
  };

  return (
    <div
      className={`flex items-center rounded-lg bg-opacity-10 px-4 py-3 text-sm ${getStatusClasses()} justify-between`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={checked}
            className="absolute h-full w-full cursor-pointer opacity-0"
          />
          {checked && <CheckIcon />}
          {inProgress && <LoaderIcon className="animate-spin" />}
        </label>
        {title}
      </div>
      <a href="#" className="transition-all hover:opacity-75">
        <DetailsIcon />
      </a>
    </div>
  );
};
