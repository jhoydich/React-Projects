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
            
    
                
                <body className="bg">
                    <h1 className="header"> Pizza Oven UI </h1>
                        <div className="article-container">
                            <div className="article1">
                               <div className="datadisp">Current Temp:</div>
                            </div>
                            <div className="article1">
                                <div className="timer-buttons">
                                
                                        <button className="b">Start Timer</button>
                                    
                                
                                        <button className="b">Reset Timer</button>
                                
                                </div>
                                
                                <div className="timer"> Time Remaining:</div>
                                
                            </div>
                        </div>
                </body>
    
            
                );
    }
}

export default OvenContainer