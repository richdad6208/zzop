import { createBrowserRouter } from "react-router-dom";
import {
  Home,
  Cart,
  Products,
  ProductDetail,
  Login,
  PostNewProduct,
  NotFound,
} from "@pages";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "", element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "products", element: <Products /> },
      { path: "products/new", element: <PostNewProduct /> },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
