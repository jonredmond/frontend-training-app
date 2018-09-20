import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import { OrderTable } from './order-table';

const defaultOrders = [
  {
    id: 78,
    creationTime: '2013-04-16T22:41:51.380Z',
    side: 'Buy',
    symbol: 'DIS',
    quantity: 983444,
    quantityPlaced: 698444,
    quantityExecuted: 339444,
    limitPrice: 31.46,
    priority: 50,
    status: 'Executed',
    traderId: 'AM'
  },
  {
    id: 79,
    creationTime: '2013-04-16T22:41:51.380Z',
    side: 'Buy',
    symbol: 'DIS',
    quantity: 983444,
    quantityPlaced: 698444,
    quantityExecuted: 339444,
    limitPrice: 31.46,
    priority: 50,
    status: 'Executed',
    traderId: 'AM'
  },
  {
    id: 80,
    creationTime: '2013-04-16T22:41:51.380Z',
    side: 'Buy',
    symbol: 'DIS',
    quantity: 983444,
    quantityPlaced: 698444,
    quantityExecuted: 339444,
    limitPrice: 31.46,
    priority: 50,
    status: 'Executed',
    traderId: 'AM'
  }
];

storiesOf('OrderTable', module)
  .add('default', () => (
    <OrderTable orders={object('orders', defaultOrders)}/>
  ))