import React from "react";
import Agenda from "../layout/agenda";
import Home from "../layout/home";
import {
    createBrowserRouter
} from "react-router-dom";

const paths = [
    {
        path: "/agenda",
        element: <Agenda/>
    },
    {
        path: "/",
        element: <Home/>
    }
]
export const router = createBrowserRouter(paths)