import { configure } from '@storybook/react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import '../src/sass-variables/reset.css';
addDecorator(withKnobs);

configure(
  () => {
    const req = require.context('../src', true, /.stories.jsx$/);
    req.keys().forEach((filename) => req(filename));
  },
  module
);