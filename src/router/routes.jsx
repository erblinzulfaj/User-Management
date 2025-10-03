import {createBrowserRouter} from "react-router-dom";
import App from "../App.jsx";
import UsersListPage from "../pages/UsersListPage.jsx";
import UserDetailsPage from "../pages/UserDetailsPage.jsx";
import UserFormPage from "../pages/UserFormPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/", element: <UsersListPage/>},
            {path: "users/:id", element: <UserDetailsPage/>},
            {path: "users/create", element: <UserFormPage/>},
            {path: "users/:id/edit", element: <UserFormPage mode={'edit'}/>},
            {path: "*", element: <NotFoundPage/>},
        ],
    },
]);

export default router;