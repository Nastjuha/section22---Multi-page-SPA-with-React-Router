import {
  createBrowserRouter,
  RouterProvider,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

//const router = createBrowserRouter(routeDefinitions);

// an array of route definition objects
const router = createBrowserRouter([
  //1. we add an extra route to our router definition
  // element that loads the layout wrapper, that should be wrapped around other routes
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  }, // this element will wrap all other routes above
  // we can add path-dependant layout wrappers here, e.x.:
  // {
  //   path: "/admin",
  //   children: [

  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
