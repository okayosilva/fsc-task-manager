export const InputLabel = ({ label, ...props }) => {
  return (
    <label className="text-sm font-semibold text-brand-dark-blue" {...props}>
      {label}
    </label>
  );
};
