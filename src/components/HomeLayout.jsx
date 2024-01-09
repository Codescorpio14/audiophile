import { Outlet } from "react-router-dom";
import Intro from "./Intro";

function HomeLayout() {
  return (
    <>
      <Outlet />
      <Intro />
    </>
  );
}

export default HomeLayout;
