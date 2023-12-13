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
import { PrivateRouter } from "@components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "", element: <Home /> },
      {
        path: "cart",
        element: (
          <PrivateRouter>
            <Cart />
          </PrivateRouter>
        ),
      },
      { path: "products", element: <Products /> },
      {
        path: "products/new",
        element: (
          <PrivateRouter>
            <PostNewProduct />
          </PrivateRouter>
        ),
      },
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
