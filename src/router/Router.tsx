import React from "react";
import Agenda from "../layout/agenda";
import Home from "../layout/home";
import {
    createBrowserRouter
} from "react-router-dom";

const paths = [
    {
        path: "/",
        element: <Agenda/>
    },
    {
        path: "/home",
        element: <Home/>
    }
]
export const router = createBrowserRouter(paths)