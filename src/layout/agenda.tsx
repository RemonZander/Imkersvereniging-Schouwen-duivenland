import React, {Component} from "react";
import Header from "./components/header";
import '../resources/css/App.css';
import axios from "axios";
import {AgendaResponseInterface} from "../interfaces/AgendaResponseInterface";

const Agenda = (): JSX.Element => {
    return (
        <>
            <div className="bg-yellow-500 min-h-screen">
                <header>
                    <Header/>
                </header>
            </div>
        </>
    )
}
export default Agenda;