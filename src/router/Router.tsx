import React from "react";
import Agenda from "../layout/agenda/agenda";
import {
    createBrowserRouter
} from "react-router-dom";

const paths = [
    {
        path: "/agenda",
        element: <Agenda/>
    }
]
export const router = createBrowserRouter(paths)