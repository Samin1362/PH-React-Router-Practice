import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    Component: Root,
    children: [
      {
        index: true,
        path: "/", 
        loader: () => fetch("booksData.json"),
        Component: Home
      }
    ]
  },
]);