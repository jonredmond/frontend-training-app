import React from 'react';

import style from './order-chart.scss';

import { ChartScale } from '../../block';
import { Order } from '../../module';

export const OrderChart = ({
  orders
}) => (
  <section className={style['order-chart']}>
    <span className={style['order-chart__id-label']}>Order ID</span>
    <ChartScale className={style['order-chart__scale']} />
    <span className={style['order-chart__total-label']}>Total</span>
    {
      orders.map(({
        id,
        quantity,
        quantityPlaced,
        quantityExecuted
      }) => 
        <div className={style['order-chart__order']} key={`order-${id}`}>
          <span className={style['order-chart__order__id']}>{id}</span>
          <Order className={style['order-chart__order__bar']} quantity={quantity} quantityPlaced={quantityPlaced} quantityExecuted={quantityExecuted} />
          <span className={style['order-chart__order__total']}>{quantity}</span>
        </div>
      )
    }
  </section>
);