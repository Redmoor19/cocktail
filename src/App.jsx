import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Browse from "./pages/Browse";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import NavBar from "./UI/NavBar";
import Gradient from "./UI/Gradient";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <NavBar />
        <Gradient>
          <Routes>
            <Route path="/" index element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Gradient>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
