import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WorkoutProvider } from "./context/WorkoutContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
    <WorkoutProvider>
      <App />
    </WorkoutProvider>
    </AuthContextProvider>
  </StrictMode>
);
