export const Button = ({ variant = 'primary', children, ...props }) => {
  const variants = {
    primary: 'bg-[#00ADB5] text-white',
    secondary: 'text-[#818181] bg-none',
    danger: 'text-[#818181] hover:text-[#e21f1f] bg-none',
  };
  const getVariantClasses = () => {
    return `flex items-center gap-2 rounded-md px-3 py-1 text-xs hover:opacity-75 transition font-semibold ${variants[variant]}`;
  };

  return (
    <button {...props} className={getVariantClasses()}>
      {children}
    </button>
  );
};
