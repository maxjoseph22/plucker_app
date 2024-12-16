import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { MyProfile } from "./pages/myProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/SignUp",
        element: <SignUpPage />
    },
    {
        path: "/profile",
        element: <MyProfile />
    }

]);



function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;