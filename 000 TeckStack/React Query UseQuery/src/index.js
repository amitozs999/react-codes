import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools></ReactQueryDevtools>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>
);
