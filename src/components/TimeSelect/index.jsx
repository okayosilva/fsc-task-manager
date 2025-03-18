import { forwardRef } from 'react';

import { InputLabel } from '../Input/inputLabel';

export const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel label="Horário" htmlFor="time" />
      <select
        name="time"
        id="time"
        className="w-full rounded-lg border border-solid border-brand-border-input px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-text-gray"
        ref={ref}
        {...props}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>
    </div>
  );
});

TimeSelect.displayName = 'TimeSelect';
