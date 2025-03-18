export const Button = ({
  variant = 'primary',
  size = 'small',
  children,
  className,
  ...props
}) => {
  const variantsColors = {
    primary: 'bg-brand-primary text-white',
    secondary: 'bg-brand-light-gray text-brand-dark-blue',
    ghost: 'text-brand-dark-gray bg-none',
    danger: 'text-brand-dark-gray hover:text-brand-danger bg-none',
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
