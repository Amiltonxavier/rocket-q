import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../_layout/applayout";
import Dashboard from "../pages/dashboard";
import SignIn from "../pages/sign-in";
import CreateRoom from "../pages/createRoom/page";
import AuthLayout from "../_layout/authlayout";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/sign-in',
                element: <SignIn />
            },
            {
                path: '/create-room',
                element: <CreateRoom />
            }
        ]
    }
])