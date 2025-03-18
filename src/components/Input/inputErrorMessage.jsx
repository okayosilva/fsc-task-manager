import PropTypes from 'prop-types';

export const InputErrorMessage = ({ errorMessage }) => {
  return <p className="mt-2 text-left text-xs text-red-500">{errorMessage}</p>;
};

InputErrorMessage.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};
