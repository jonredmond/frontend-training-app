import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import { Legend } from './legend';

storiesOf('Legend', module)
  .add('default', () => (
    <Legend />
  ));