import PropTypes from 'prop-types';

export const TaskSeparator = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2 border-b border-solid border-brand-border pb-1">
      {icon}
      <p className="text-sm font-bold text-brand-text-gray">{title}</p>
    </div>
  );
};

TaskSeparator.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
