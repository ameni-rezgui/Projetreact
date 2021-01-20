import React, { Component } from "react";
import {
Route,
NavLink,
HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Formulaire from "./Formulaire";
import Galerie from "./Galerie";
import Googlemaps from "./Googlemaps";
class Main extends Component {
    render() {
    return (
    <HashRouter>
    <div>
    <h1>Simple SPA</h1>
    <ul className="header">
    <li><NavLink exact to="/" >Home</NavLink></li>
    <li><NavLink  to="/stuff" activeClassName="active">Stuff</NavLink></li>
    <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
    <li><NavLink to="/formulaire" activeClassName="active">Formulaire</NavLink></li>
    <li><NavLink to="/Galerie" activeClassName="active">Galerie</NavLink></li>
    <li><NavLink to="/Googlemaps" activeClassName="active">Map</NavLink></li>
    </ul>
    <div className="content">
    <Route exact path="/" component={Home}/>
    <Route path="/stuff" component={Stuff}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/formulaire" component={Formulaire}/>
    <Route path="/galerie" component={Galerie}/>
    <Route path="/Googlemaps" component={Googlemaps}/>
    </div>
    </div>
    </HashRouter>
    );
    }
    }
    export default Main;