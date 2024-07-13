import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import SuccessPage from "../components/ui/checkout/SuccessPage";
import Checkout from "../pages/Checkout";
import ContactUsPage from "../pages/ContactUsPage";
import AboutUsPage from "../pages/AboutUsPage";
import ProductManagement from "../pages/ProductManagement";
import ProductCreate from "../components/ui/ProductCreate/ProductCreate";
import ProductUpdate from "../components/ui/ProductUpdate/ProductUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
    ],
  },
  {
    path: "/products",
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "management",
        element: <ProductManagement />,
      },
      {
        path: "product-create",
        element: <ProductCreate />,
      },
      {
        path: "product-update/:id",
        element: <ProductUpdate />,
      },
      {
        path: "details/:id",
        element: <ProductDetails />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "success",
        element: <SuccessPage />,
      },
    ],
  },
]);

export default router;
