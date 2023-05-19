import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToy from "../Pages/AddToy/AddToy";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'blog',
                element: <Blog />
            },
            {
                path: 'addToy',
                element: <AddToy />
            },
            {
                path: 'allToys',
                element: <AllToys />,
                loader: () => fetch('http://localhost:3000/allToys')
            },
            {
                path: 'toyDetails/:id',
                element: <ToyDetails/>,
                loader: ({ params }) => fetch(`http://localhost:3000/toyDetails/${params.id}`)
            },
            {
                path:'myToys',
                element: <MyToys/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);

export default router;