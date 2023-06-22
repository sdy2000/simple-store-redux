import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
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
            <Route path="/product/:slug" element={<ProductDetailPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
