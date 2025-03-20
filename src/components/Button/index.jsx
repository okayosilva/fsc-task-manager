import PropTypes from 'prop-types';
import { tv } from 'tailwind-variants';

export const Button = ({ color, size, className, children, ...props }) => {
  const button = tv({
    base: `flex items-center justify-center gap-2 rounded-md px-3 font-semibold transition hover:opacity-75 ${props.disabled && 'opacity-50'}`,
    variants: {
      color: {
        primary: 'bg-brand-primary text-white',
        secondary: 'bg-brand-light-gray text-brand-dark-blue',
        ghost: 'bg-none text-brand-dark-gray',
        danger: 'bg-none text-brand-dark-gray hover:text-brand-danger',
        delete: 'bg-brand-danger text-white',
      },
      size: {
        small: 'py-1 text-xs',
        large: 'py-2 text-sm',
      },
      disabled: {
        true: "hover:opacity-50' cursor-not-allowed opacity-50",
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'small',
    },
  });

  return (
    <button
      className={button({ color, size, disabled: props.disabled, className })}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'danger', 'delete']),
  size: PropTypes.oneOf(['small', 'large']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
