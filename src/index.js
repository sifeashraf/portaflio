import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BrowserRouter from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([{ path: "/", element: <App /> }]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
reportWebVitals();
