import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import propTypes from 'prop-types';
import { rocketsSlice } from './src/features/rockets/rockets.slice';
import { missionsSlice } from './src/features/missions/missions.slice';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { rockets: rocketsSlice.reducer, missions: missionsSlice },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </Provider>
  );

  Wrapper.defaultProps = {
    children: null,
  };
  Wrapper.propTypes = {
    children: propTypes.node,
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
