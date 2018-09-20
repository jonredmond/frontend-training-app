import React from 'react';

import { LegendItem } from '../../block';

import style from './legend.scss';

export const Legend = () => (
  <section className={style.legend}>
    <LegendItem status='remaining' label='Total Order'/>
    <LegendItem status='placed' label='Placed'/>
    <LegendItem status='executed' label='Executed'/>
  </section>
);