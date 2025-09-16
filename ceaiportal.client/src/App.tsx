import { Suspense } from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes";
import { ContextProvider } from "./context/GeneralContext";

function App() {
  const router = createBrowserRouter(routes());

  return (
    <HelmetProvider>
      <ContextProvider>
        <Suspense>
          <RouterProvider router={router} />
        </Suspense>
      </ContextProvider>
    </HelmetProvider>
  );
}

export default App;
