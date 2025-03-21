import PropTypes from 'prop-types';
import { forwardRef } from 'react';

export const Root = forwardRef(({ children }, ref) => {
  return (
    <div
      className="fixed inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm"
      ref={ref}
    >
      {children}
    </div>
  );
});

Root.displayName = 'Root';

Root.propTypes = {
  children: PropTypes.node,
};
