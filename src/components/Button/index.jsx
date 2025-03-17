export const Button = ({
  variant = 'primary',
  size = 'small',
  children,
  className,
  ...props
}) => {
  const variantsColors = {
    primary: 'bg-[#00ADB5] text-white',
    secondary: 'bg-[#EEEEEE] text-[#35383E]',
    ghost: 'text-[#818181] bg-none',
    danger: 'text-[#818181] hover:text-[#e21f1f] bg-none',
  };

  const variantsSize = {
    small: 'py-1 text-xs',
    large: 'py-2 text-sm',
  };

  const getVariantClasses = () => {
    return `flex items-center gap-2 rounded-md px-3 hover:opacity-75 justify-center transition font-semibold ${variantsColors[variant]} ${variantsSize[size]} ${className}`;
  };

  return (
    <button className={getVariantClasses()} {...props}>
      {children}
    </button>
  );
};
