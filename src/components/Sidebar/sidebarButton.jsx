import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

export const SidebarButton = ({ color, children }) => {
  const sidebar = tv({
    base: 'flex items-center gap-2 rounded-lg px-6 py-3',
    variants: {
      color: {
        unselected: 'text-brand-dark-blue',
        selected: 'bg-brand-primary bg-opacity-15 text-brand-primary',
      },
    },
    defaultVariants: {
      color: 'unselected',
    },
  });

  return (
    <a href="#" className={sidebar({ color })}>
      {children}
    </a>
  );
};

SidebarButton.propTypes = {
  color: PropTypes.oneOf(['unselected', 'selected']),
  children: PropTypes.node.isRequired,
};
