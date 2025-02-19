export const SidebarButton = ({ variant = 'unselected', children }) => {
  const getVariantClasses = () => {
    const variantSelected =
      variant === 'unselected'
        ? 'text-[#35383E]'
        : 'bg-[#E6F7F8] text-[#00ADB5]';

    return `rounded-lg px-6 py-3 ${variantSelected}`;
  };

  return (
    <a href="#" className={getVariantClasses()}>
      {children}
    </a>
  );
};
