import PropTypes from 'prop-types';

export const Title = ({ children }) => {
  return (
    <h2 className="text-xl font-semibold text-brand-dark-blue">{children}</h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
