import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import {routerConfig} from "./router/Router";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
    <RouterProvider router={routerConfig}></RouterProvider>
);

reportWebVitals();
