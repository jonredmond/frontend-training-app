import React from 'react';

import { OrderRow } from '../../module';

import style from './order-table.scss';

export const OrderTable = ({
  orders
}) => (
  <table className={style['order-table']}>
    <thead>
      <tr className={style['order-table__header']}> 
        <th>Id</th>
        <th className={style['hidden-mobile']}>Creation Time</th>
        <th>Side</th>
        <th>Symbol</th>
        <th>Quantity</th>
        <th className={style['hidden-mobile']}>Placed</th>
        <th className={style['hidden-mobile']}>Executed</th>
        <th>Limit Price</th>
        <th className={style['hidden-tablet']}>Priority</th>
        <th className={style['hidden-mobile']}>Status</th>
        <th className={style['hidden-tablet']}>Trader</th>
      </tr>
    </thead>
    <tbody>
      {
        orders.map((
          order
        ) => (
          <OrderRow key={`order-row-${order.id}`} order={order}/> 
        ))
      }
    </tbody>
  </table>
)