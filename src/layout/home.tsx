import React, {Component} from "react";
import Header from "./components/header";
import '../resources/css/App.css';

class Home extends Component {

    render(): JSX.Element {
        return (
            <div>
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
                  <div className="bg-yellow-500 h-screen">
                    <header>
                        <Header/>
                    </header>

                    <main>
                        <div className="left-section">
                            <h1 className="information">Informatie</h1>

                            <div className="white-section">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque voluptates hic eum beatae animi temporibus doloribus veniam maiores eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nostrum eos deserunt necessitatibus blanditiis ea ratione, earum numquam. Adipisci, optio.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
          </div>
        )
    }
}

export default Home;
