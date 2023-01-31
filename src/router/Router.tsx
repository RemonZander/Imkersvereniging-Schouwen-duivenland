import React from "react";
import Agenda from "../layout/agenda";
import Home from "../layout/home";
import {
    createBrowserRouter
} from "react-router-dom";

const paths = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/agenda",
        element: <Agenda/>
    }
]
export const router = createBrowserRouter(paths)