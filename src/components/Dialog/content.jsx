import PropTypes from 'prop-types';

export const Content = ({ children }) => {
  return <div className="flex w-[336px] flex-col space-y-4">{children}</div>;
};

Content.prototype = {
  children: PropTypes.node,
};
