import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Report from "../Components/Report/Report";
import AddReport from "../Components/Report/AddReport";
import Main from "../Components/Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/report",
                element: <Report></Report>
            },
            {
                path: "/addReport",
                element: <AddReport></AddReport>
            },
        ]
    },
])