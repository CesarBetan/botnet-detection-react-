import React, { Component } from 'react';
import './Home.css';
import Log from "../Log/Log";
import Graphs from "../Graphs/Graphs";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'Hola',
        };
    }

    render(){
        return (
            <div className="container-fluid container-fluid-spacious">
                <div className="col-sm-10 col-sm-offset-1">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Posibles Amenazas</h3>
                    </div>
                    <Log/>
                </div>
                <div className="col-sm-10 col-sm-offset-1">
                    <div className="hr-divider m-t m-b-md">
                        <h3 className="hr-divider-content hr-divider-heading">Información General</h3>
                    </div>
                    <Graphs/>
                </div>
            </div>
        );
    }
}

export default Home;