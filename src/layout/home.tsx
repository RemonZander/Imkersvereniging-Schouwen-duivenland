import React, {Component} from "react";
import Header from "./components/header";
import Honeycomb from "./components/honeycomb";
import '../resources/css/App.css';

class Home extends Component {

    render(): JSX.Element {
        return (
            <>
                <div id="homeRoot" className="h-screen">
                    {/* bg-yellow-500  */}
                    <Header/>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Informatie</h1>

                            <div className="white-section">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque voluptates hic eum beatae animi temporibus doloribus veniam maiores eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum eos deserunt necessitatibus blanditiis ea ratione, earum numquam. Adipisci, optio.</p>

                                <button className="readmore">Lees verder</button>
                            </div>
                        </div>
                        <Honeycomb/>
                    </main>
                    

                </div>
            </>
        )
    }
}

export default Home;