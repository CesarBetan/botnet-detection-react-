import React, { Component } from 'react';
import './Graphs.css';
import Fire from "../Fire";
import { Bar } from "react-chartjs-2";

class Graphs extends Component {

    constructor(props) {
        super(props);
        this.state = {email: "example@pe.com", password: "password"};
        this.state = { messages: [] };
    }

    componentWillMount(){
        let messagesRef = Fire.database().ref('test_data').limitToLast(100);
        messagesRef.on('child_added', snapshot => {
            console.log(snapshot.val());
            const message = snapshot.val();
            this.setState({ messages: [message].concat(this.state.messages) });
        });
    }

    render(){
        let registers = this.state.messages;
        let ipCount = 0;
        let portCount = 0;
        let errCount = 0;
        registers.forEach(reg => {
            reg.reasons.forEach(r =>{
                switch (r.reason) {
                    case 'BAD_IP':
                        ipCount+=r.count;
                        break;
                    case 'BAD_PORT':
                        portCount+=r.count;
                        break;
                    case 'ERR':
                        errCount+=r.count;
                        break;
                }
            });
        });
        let chartData = {
            labels:["Tipos de Amenazas"],
            datasets:[
                {
                    label:'BAD_IP',
                    data:[
                        ipCount
                    ],
                    backgroundColor:[
                        'rgba(255,99,132,0.6)'
                    ]
                },
                {
                    label:'BAD_PORT',
                    data:[
                        portCount
                    ],
                    backgroundColor:[
                        'rgba(54,162,235,0.6)'
                    ]
                },
                {
                    label:'ERR',
                    data:[
                        errCount
                    ],
                    backgroundColor:[
                        'rgba(255,206,86,0.6)'
                    ]
                },
            ]
        };
        return (
            <div className="col-sm-12">
                <div className="chart">
                    {console.log(chartData)}
                    <Bar
                        data={chartData}
                        options={{
                            title:{
                                display:true,
                                text:"Amenazas Potenciales",
                                fontsize:40
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                        }}
                    />
                </div>
            </div>
        );
    }

}

export default Graphs;
