import React, {Component} from "react";
import Header from "./components/header";
import '../resources/css/App.css';

class Agenda extends Component {

    render(): JSX.Element {
        return (
            <>
                <div className="h-screen">
                    <header>
                        <Header/>
                    </header>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Informatie</h1>

                            <div className="white-section">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque voluptates hic eum beatae animi temporibus doloribus veniam maiores eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum eos deserunt necessitatibus blanditiis ea ratione, earum numquam. Adipisci, optio.</p>
                            </div>

                            <div className="hello">
                                fdfnjsdfnsdjfndjsnfjnsdjnfjsdnfjnsdjfndsjnfnsdfsdjfnsjdnfj
                            </div>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}
export default Agenda;