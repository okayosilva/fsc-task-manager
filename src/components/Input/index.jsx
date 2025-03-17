import { InputLabel } from './inputLabel';

export const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel label={label} htmlFor={props.id} />
      <input
        type="text"
        className="w-full rounded-lg border border-solid border-[#ECECEC] px-4 py-3 outline-[#00ADB5] placeholder:text-sm placeholder:text-[#9A9C9F]"
        {...props}
      />
    </div>
  );
};
