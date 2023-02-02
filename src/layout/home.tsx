import React, {Component} from "react";
import Header from "./components/header";
import '../resources/css/App.css';

class Home extends Component {

    render(): JSX.Element {
        return (
            <>
                <div className="bg-yellow-500 h-screen ">
                    <header>
                        <Header/>
                    </header>
                </div>
            </>
        )
    }
}

export default Home;