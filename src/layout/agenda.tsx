import React, {Component} from "react";
import Header from "./components/header";
import '../resources/css/App.css';
import axios from "axios";
import {AgendaResponseInterface} from "../interfaces/AgendaResponseInterface";

const Agenda = (): JSX.Element => {
    return (
        <>
            <div className="flex flex-col min-h-screen text-white bg-yellow-500">
                <header>
                    <Header/>
                </header>
                <main className="flex-grow">

                </main>
            </div>
        </>
    )
}
export default Agenda;