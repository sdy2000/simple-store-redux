import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  CartPage,
  Category,
  Contact,
  HomeLayout,
  HomePage,
  ProductDetailPage,
  ProductPage,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
