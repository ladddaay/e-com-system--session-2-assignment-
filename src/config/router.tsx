import { createBrowserRouter } from "react-router";
import ProductCustomiseDialog from "../components/dialogs/product-customise-dialog";
import { MainLayout } from "../layouts/main-layout";
import AboutPage from "../pages/about-page";
import CartPage from "../pages/cart-page";
import LandingPage from "../pages/landing-page";
import NotFoundPage from "../pages/not-found-page";
import { ProductsDetailPage } from "../pages/product-detail-page";
import { ProductsPage } from "../pages/products-page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "shop",
                children: [
                    {
                        path: "products",
                        element: <ProductsPage />,
                    },
                    {
                        path: "product/:productId",
                        element: <ProductsDetailPage />,
                        children: [
                            {
                                path: "customise",
                                element: <ProductCustomiseDialog />,
                            },
                        ],
                    },
                    {
                        path: "cart",
                        element: <CartPage />,
                    },
                ],
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;
