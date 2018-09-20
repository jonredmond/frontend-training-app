import React from 'react';

import style from './chart-scale.scss';

export const ChartScale = ({
  className
}) => (
  <div className={`${style['chart-scale']} ${className}`}>
    <div className={style['chart-scale__labels']}>
      <span className={style['chart-scale__label']}>0%</span>
      <span className={style['chart-scale__label']}>50%</span>
      <span className={style['chart-scale__label']}>100%</span>
    </div>
    <div>
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
      <div className={style['chart-scale__tick']} />
    </div>
    <div className={style['chart-scale__line']}/>
  </div>
)