import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {NextUIProvider} from "@nextui-org/react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </Provider>
);
