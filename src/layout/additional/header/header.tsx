import React, {Component} from "react";
import '../../../css/App.css';
import axios from 'axios';
import {
    Link
} from "react-router-dom";

class Header extends Component {

    constructor(props: any) {
        super(props);
        this.state = {
            agenda: {
                item: [],
                color: [],
            }
        }
    }

    render(): JSX.Element {
        return (
            <div className="flex w-full bg-black text-white align-center">
                <div className="m-auto pb-[1%] pt-[1%]">
                    <ul className="flex flex-row gap-3 text-yellow-700">
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/projecten">Projecten</Link>
                        </li>
                        <li id="agenda" className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/agenda">Agenda</Link>
                        </li>
                        <li  className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/nieuws">Nieuws</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/vrienden">Vrienden</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="bijenzwerm">Bijenzwerm</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/bijenhouden">Bijenhouden</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/informatie">Informatie</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%] hover:text-brown">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;