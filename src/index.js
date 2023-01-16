import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { Container, MantineProvider } from '@mantine/core';
import { MyGlobalStyles } from 'global.Styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ colorScheme: 'dark' }}
    >
      <MyGlobalStyles />
      <Container>
        <App />
      </Container>
    </MantineProvider>
  </Provider>
);
