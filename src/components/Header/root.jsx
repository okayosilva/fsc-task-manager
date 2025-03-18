import PropTypes from 'prop-types';

export const Root = ({ children }) => {
  return <div className="">{children}</div>;
};

Root.propTypes = {
  children: PropTypes.node.isRequired,
};
