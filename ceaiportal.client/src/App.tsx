import { Suspense } from "react";
import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./pages/routes";

function App() {
  const router = createBrowserRouter(routes());

  return (
    <HelmetProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
