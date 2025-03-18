import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { InputErrorMessage } from './inputErrorMessage';
import { InputLabel } from './inputLabel';

export const Input = forwardRef(({ label, errorMessage, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel label={label} htmlFor={props.id} />
      <input
        type="text"
        className="w-full rounded-lg border border-solid border-brand-border-input px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...props}
      />
      {errorMessage && <InputErrorMessage errorMessage={errorMessage} />}
    </div>
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
};
