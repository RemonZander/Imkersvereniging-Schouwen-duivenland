import React from "react";
import Home from "../layout/home";
import Agenda from "../layout/agenda"
import Nieuws from "../layout/nieuws";
import Bijenzwerm from "../layout/bijenzwerm";
import Vrienden from "../layout/vrienden";
import Projecten from "../layout/projecten";
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
    },
    {
        path: "/nieuws",
        element: <Nieuws/>
    },
    {
        path: "/vrienden",
        element: <Vrienden/>
    },
    {
        path: "/bijenzwerm",
        element: <Bijenzwerm/>
    },
    {
        path: "/projecten",
        element: <Projecten/>
    }
]
export const router = createBrowserRouter(paths)