import React from 'react';
import style from './bar.scss';

export const Bar = ({
  color,
  width
}) => (
  <div className={style.bar} style={{ backgroundColor: color, width }} />
);