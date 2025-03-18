import PropTypes from 'prop-types';

export const InputLabel = ({ label, ...props }) => {
  return (
    <label className="text-sm font-semibold text-brand-dark-blue" {...props}>
      {label}
    </label>
  );
};

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
};
