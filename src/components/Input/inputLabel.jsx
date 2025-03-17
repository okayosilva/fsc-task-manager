export const InputLabel = ({ label, ...props }) => {
  return (
    <label className="text-sm font-semibold text-[#35383E]" {...props}>
      {label}
    </label>
  );
};
