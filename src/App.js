import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";

// an array of route definition objects
const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
