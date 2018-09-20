import React from 'react';

import { Bar } from '../../block';

import style from './order.scss';

const colors = {
  total: '#FFF4CE',
  placed: '#FDBD5A',
  executed: '#FD8300'
}

export const Order = ({
  className = '',
  quantity,
  quantityPlaced,
  quantityExecuted,
}) => {
  const percentageExecuted = (quantityExecuted/quantity * 100);
  const percentagePlaced = (quantityPlaced/quantity * 100) - percentageExecuted;
  const percentageRemaining = 100 - percentagePlaced - percentageExecuted;

  console.log(percentageRemaining)

  return (
    <div className={`${style.order} ${className}`}>
      <Bar color={colors.executed} width={`${percentageExecuted}%`} />
      <Bar color={colors.placed} width={`${percentagePlaced}%`} />
      <Bar color={colors.total} width={`${percentageRemaining}%`} />
    </div>
  );
}