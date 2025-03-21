import PropTypes from 'prop-types';

export const Body = ({ children }) => {
  return (
    <div className="rounded-xl bg-white p-5 text-center shadow">{children}</div>
  );
};

Body.prototype = {
  children: PropTypes.node,
};
