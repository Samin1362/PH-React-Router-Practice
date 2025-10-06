import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

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
      }, 
      {
        path: "/about", 
        Component: About
      }
    ]
  },
]);