import React, {Component} from "react";
import Header from "../additional/header/header";
import '../../css/App.css';

class Home extends Component {

    render(): JSX.Element {
        return (
            <>
                <div className="flex flex-col min-h-screen bg-yellow-500">
                    <header>
                        <Header/>
                    </header>
                    <main className="flex flex-grow">
                        <div className="text-white pt-[1%] pl-[33%]">
                            <div className="flex flex-row text-white pl-[5%] lg:pl-[50%] md:pl-[30%] sm:pl-[55%] pt-[5%]">
                                <div className="absolute b w-5/12 bg-blue-600">
                                    <div>s</div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </>
        )
    }
}

export default Home;