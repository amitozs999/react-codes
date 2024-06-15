import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./features/page";
import detailsReducer from "./features/details";
import App from "./App";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    page: pageReducer,
    details: detailsReducer,
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
