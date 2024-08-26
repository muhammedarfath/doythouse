import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ThemeProvider } from "./components/darkmode/theme-provider";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ThemeProvider>
  </Provider>
);
