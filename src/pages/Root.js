import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

function RootLayout() {
  return (
    <>
      {/* <h1>Root Layout</h1> */}
      <MainNavigation />
      aaaa
      <main className={classes.content}>
        <Outlet />
      </main>
      {/* a marker to place where child route elements (of <RootLayout />) should be rendered to*/}
      {/* in the end its a place where
       <HomePage /> and <ProductsPage />
      will be rendered  */}
    </>
  );
}

export default RootLayout;
