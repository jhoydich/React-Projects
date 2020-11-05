import React from "react"
import MyHeader from "./Header"
import MyThermometer from "./Therm"
import Timer from "./Timer"
//import ThemingLayout from "./c"
//import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from 'semantic-ui-react';


class OvenContainer extends React.Component{
    updateTherm = () =>{
        //will update the value of the thermometer
    };
    
    render(){
        return(
            
            <div>
                
                <div className="body">
                    <h1 className="header"> Pizza Oven UI </h1>
                        <div className="article-container">
                            <div className="article1">
                                <MyThermometer />
                            </div>
                            <div className="article1">
                                <h3>Timers</h3>
                                <Timer />
                                <Timer />
                            </div>
                        </div>
                </div>
            </div>
            
                );
    }
}

export default OvenContainer