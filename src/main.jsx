import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./common.css";
import { ConfigProvider } from "antd";
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#FF5E62",
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);