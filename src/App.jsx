import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { ContactsPage } from "./pages/contacts-page";
import { RestaurantPage } from "./pages/restaurant-page";
import { Layout } from "./components/layout/component";
import { ThemeContextProvider } from "./contexts/theme/provider";
import { UserContextProvider } from "./contexts/user/provider";
import { RestaurantContainer } from "./components/restaurant/container";

import { MenuPage } from "./pages/menu-pages";
import { ReviewPage } from "./pages/review-page";
import { DishPage } from "./pages/dish-page";
import { DishInfoPage } from "./pages/dish-info-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "contacts", element: <ContactsPage /> },
      {
        path: "restaurants",
        element: <RestaurantPage />,
        children: [
          {
            path: ":restaurantId",
            element: <RestaurantContainer />,
            children: [
              { path: "menu", element: <MenuPage /> },
              { path: "reviews", element: <ReviewPage /> },
            ],
          },
        ],
      },
      {
        path: "dish",
        element: <DishPage />,
        children: [{ path: ":dishId", element: <DishInfoPage /> }],
      },
    ],
  },
]);

export const App = () => {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </ThemeContextProvider>
  );
};
