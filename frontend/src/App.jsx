import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { MyProfile } from "./pages/myProfile";
import { RecipeDisplayPage} from "./pages/RecipeDisplayPage"
import { Logout } from "./components/Logout"
import './assets/App.css';

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <HomePage />
    // },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignUpPage />
    },
    {
        path: "/myprofile",
        element: <MyProfile />
    },
    {
        path: "/sightings/:username/:sighting_id",
        // path: "/sightings/sighting",
        // path: "/sightings",
        element: <RecipeDisplayPage />
    },
    {
        path: "/logout",
        element: <Logout />
    }


]);

function App() {
    return (
        <div className="app-container"><RouterProvider router={router} /></div>
        
    );
}

export default App;