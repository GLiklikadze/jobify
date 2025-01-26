import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/authContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);
