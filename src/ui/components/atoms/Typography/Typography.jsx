// @flow
import React from 'react';
import type { Node } from 'react';
import classnames from 'classnames';

import styles from './Typography.module.css';

type Props = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle' | 'body',
  component?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  color?: 'main' | 'light',
  bold?: boolean,
  className?: string,
  children: Node | string,
};

const Typography = ({
  variant = 'body',
  component = 'p',
  color = 'main',
  bold = false,
  gutterBottom,
  className,
  children,
}: Props) => {
  const Component = component;
  const style = classnames(
    styles.text,
    styles[variant],
    styles[color],
    {
      [styles.bold]: bold,
      [styles.gutterBottom]: gutterBottom,
    },
    className
  );

  return (
    <Component variant={variant} className={style}>
      {children}
    </Component>
  );
};

export default Typography;
