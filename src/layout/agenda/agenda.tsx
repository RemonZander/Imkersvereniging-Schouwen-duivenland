import React, {Component} from "react";
import Header from "../additional/header/header";
import '../../css/App.css'
import axios from "axios";
import {AgendaResponseInterface} from "../../interfaces/AgendaResponseInterface";

class Agenda extends Component {
    render(): JSX.Element {
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

    componentDidMount() {
        axios.defaults.baseURL = "http://localhost:5000";
        axios.get('/agenda').then((response) => {
            const array: AgendaResponseInterface[] = response.data.agenda;
            array.forEach((key, item) => {
                this.setState({
                    agenda: {
                        item: key.item,
                        color: key.color
                    }
                })
            })
        })
    }

}

export default Agenda;