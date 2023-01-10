import React from "react";
import Agenda from "../layout/agenda/agenda";
import Home from "../layout/home/home";
import {
    createBrowserRouter
} from "react-router-dom";

const paths = [
    {
        path: "/agenda",
        element: <Agenda/>
    },
    {
        path: "/home",
        element: <Home/>
    }
]
export const router = createBrowserRouter(paths)