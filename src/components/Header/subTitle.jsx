import PropTypes from 'prop-types';

export const SubTitle = ({ children }) => {
  return (
    <span className="text-xs font-semibold text-brand-primary">{children}</span>
  );
};

SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
