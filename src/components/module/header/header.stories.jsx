import React from 'react';
import { storiesOf } from '@storybook/react';
import { object } from '@storybook/addon-knobs';

import { Header } from './header';

storiesOf('Header', module)
  .add('default', () => (
    <Header username='Elvis Presley'/>
  ));