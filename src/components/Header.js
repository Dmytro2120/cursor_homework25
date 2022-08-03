import { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
    render() {
        return(
            <div className="header">
                <h1>CURSOR_HOMEWORK25</h1>
                <Nav/>
            </div>
        )
    }
}