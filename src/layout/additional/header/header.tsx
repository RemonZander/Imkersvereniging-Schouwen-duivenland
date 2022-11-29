import React, {Component} from "react";
import '../../../css/App.css';
import {
    Link
} from "react-router-dom";

class Header extends Component {
    render(): JSX.Element {
        return (
            <div className="flex w-full bg-black text-white align-center">
                <div className="m-auto pb-[1%] pt-[1%]">
                    <ul className="flex flex-row gap-3 text-yellow-700">
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/projecten">Projecten</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/agenda">Agenda</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/nieuws">Nieuws</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/vriennden">Vrienden</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="bijenzwerm">Bijenzwerm</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/bijenhouden">Bijenhouden</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/informatie">Informatie</Link>
                        </li>
                        <li className="border border-yellow-700 pl-[1.5%] pr-[1.5%]">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;