export const Button = ({ variant = 'primary', children }) => {
  const getVariantClasses = () => {
    const variantSelected =
      variant === 'primary'
        ? 'bg-[#00ADB5] text-white'
        : 'text-[#818181] bg-none';
    return `flex items-center gap-2 rounded-md px-3 py-1 text-xs hover:opacity-75 transition font-semibold ${variantSelected}`;
  };

  return <button className={getVariantClasses()}>{children}</button>;
};
