import { ComponentProps } from 'react';
import classNames from 'classnames';

interface MainCategoryProps extends ComponentProps<'h3'> {}

const MenuSubHeader = ({ children, className }: MainCategoryProps) => {
  return (
    <h3
      className={classNames('text-sm text-gray-600 px-5 py-4', `${className}`)}
    >
      {children}
    </h3>
  );
};

export default MenuSubHeader;
