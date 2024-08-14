import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { ThemeProvider } from "./components/darkmode/theme-provider";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </Provider>
);
