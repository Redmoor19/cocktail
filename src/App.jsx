import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Drink from "./pages/Drink";
import Ingredient from "./pages/Ingredient";

import AppLayout from "./UI/AppLayout";
import { CartContextProvider } from "./context/cartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <CartContextProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" index element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/browse/drink/:id" element={<Drink />} />
              <Route path="/browse/ingredient" element={<Ingredient />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </CartContextProvider>
  );
}

export default App;
