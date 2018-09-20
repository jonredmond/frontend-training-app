import React from 'react';

import style from './order-row.scss';

export const OrderRow = ({
  order
}) => {
  const {
    id,
    creationTime,
    side,
    buy,
    symbol,
    quantity,
    quantityPlaced,
    quantityExecuted,
    limitPrice,
    priority,
    status,
    traderId
  } = order;

  const creationDateString = new Date(creationTime).toDateString();

  return (
    <tr className={style['order-row']}> 
      <td>{id}</td>
      <td className={style['hidden-mobile']}>{creationDateString}</td>
      <td>{side}</td>
      <td>{symbol}</td>
      <td>{quantity}</td>
      <td className={style['hidden-mobile']}>{quantityPlaced}</td>
      <td className={style['hidden-mobile']}>{quantityExecuted}</td>
      <td>${limitPrice}</td>
      <td className={style['hidden-tablet']}>{priority}</td>
      <td className={style['hidden-mobile']}>{status}</td>
      <td className={style['hidden-tablet']}>{traderId}</td>
    </tr>
  );
}