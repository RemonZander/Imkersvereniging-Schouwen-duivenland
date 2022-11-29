import React, {Component} from "react";
import Header from "../additional/header/header";
import Footer from "../additional/footer/footer";
import '../../css/App.css'

class Agenda extends Component {
    render(): JSX.Element {
        return (
            <>
                <div className="flex flex-col min-h-screem text-white">
                    <header>
                        <Header/>
                    </header>
                    <main className="flex-grow">

                    </main>
                    <footer>
                        <Footer/>
                    </footer>
                </div>
            </>
        )
    }
}

export default Agenda;