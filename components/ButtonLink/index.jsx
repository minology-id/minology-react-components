import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@minology/components/Button';

const ButtonLink = ({ to, children, ...otherProps }) => {
  return (
    <Link to={to}>
      <Button {...otherProps}>{children}</Button>
    </Link>
  );
};

export default ButtonLink;
