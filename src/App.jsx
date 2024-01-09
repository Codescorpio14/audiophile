import MainLayout from "./components/MainLayout";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route path="headphones" element={<Headphones />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="earphones" element={<Earphones />} />
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
