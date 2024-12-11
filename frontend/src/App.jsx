import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/Login";
import { SignupPage } from "./pages/SignUp";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: "/SignUp",
        element: <SignupPage />,
    }
]);



function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;