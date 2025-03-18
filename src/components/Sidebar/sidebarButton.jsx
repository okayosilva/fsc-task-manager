export const SidebarButton = ({ variant = 'unselected', children }) => {
  const getVariantClasses = () => {
    const variantSelected =
      variant === 'unselected'
        ? 'text-brand-dark-blue'
        : 'bg-brand-primary bg-opacity-15 text-brand-primary';

    return `rounded-lg px-6 py-3 flex items-center gap-2 ${variantSelected}`;
  };

  return (
    <a href="#" className={getVariantClasses()}>
      {children}
    </a>
  );
};
