import React, {Component} from "react"
import ProgressCircle from '@bit/jpb_lourenco.public.progress-circle';
import { render } from "@testing-library/react";

class Timer extends Component{
    //add state
    //will change timer number from container value
    //will be able to change time value: dropdown?
    

    render(){
        return(
            <div class="flexbox-container">
                
                <ProgressCircle 
                    radius="20"
                    percentage="73"
                    height="50"
                    width="50"
                    strokeColor="#42a7f5"
                    strokeWidth="3"
					showText="true"
					textColor="#42a7f5"
					textSize="10"
                    textAlign="center"
                 />
                
                
                    <button className = "button">Start timer 1</button>
                
                
            
            </div>
        );
    }
}

export default Timer;