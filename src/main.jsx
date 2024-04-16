/* eslint-disable no-undef */

import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { FilterContextProvider } from "./context/FilterContext.jsx";
import { AppProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/cart_context.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6fm7tbsgi4gyrcze.us.auth0.com"
      clientId="Kgr7nsVt0QJfhveRxn9O3aqpJwpYfc1K"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>
    </Auth0Provider>
  </React.StrictMode>
);
