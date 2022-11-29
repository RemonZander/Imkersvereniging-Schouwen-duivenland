import React, {Component} from "react";
import Header from "../additional/header/header";
import '../../css/App.css'

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
}

export default Agenda;