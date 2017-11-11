import React from 'react';
import { render } from 'react-dom';
import TextInput from 'components/text_input';

render(
  <TextInput myPlaceholder="abc"/>,
  document.getElementById('app-container')
);
