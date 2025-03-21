import PropTypes from 'prop-types';

export const SubTitle = ({ children }) => {
  return <p className="mb-4 mt-1 text-sm text-brand-text-gray">{children}</p>;
};

SubTitle.prototype = {
  children: PropTypes.node,
};
