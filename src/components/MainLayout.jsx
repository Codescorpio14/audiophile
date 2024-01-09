import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { closeCart } from "../redux/features/togglesSlice";

function MainLayout() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <main onClick={() => dispatch(closeCart())}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
