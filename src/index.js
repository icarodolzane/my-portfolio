import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Root from './routes/root';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Experience from './pages/Experience';
import Work from './pages/Work';
import Contact from './pages/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />,
    },
    {
        path: "/experience",
        element: <Experience />,
    },
    {
        path: "/work",
        element: <Work />,
    },
    {
        path: "/contact",
        element: <Contact />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
