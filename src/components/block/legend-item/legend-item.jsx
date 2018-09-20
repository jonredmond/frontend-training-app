import React from 'react';

import style from './legend-item.scss';

export const LegendItem = ({
  status,
  label
}) => (
  <div className={style['legend-item']}>
    <div className={`${style['legend-item__key']} ${style[status]}`}/>
    <span className={style['legend-item__label']}>{label}</span>
  </div>
);