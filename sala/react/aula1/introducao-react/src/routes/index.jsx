import {createBrowserRouter} from "react-router-dom"
import { MainLayout } from "../layouts/MainLayout"

export const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <h1>Olá</h1>,
            }
        ]
    },
])