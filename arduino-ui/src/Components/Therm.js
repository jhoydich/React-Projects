import React from "react"
import Thermometer from "react-thermometer"


class MyThermometer extends React.Component{
    state = {
        min: 0,
        max: 700,
        width: 20,
        height: 300,
        backgroundColor: 'blue',
        fillColor: 'green',
        current: 10
    }
    render(){
        return(
            // get temperature over wifi from ESP8266

            <div class="flexbox-container">
                <div>
                <Thermometer
                    min={0}
                    max={700}
                    width={20}
                    height={300}
                    backgroundColo={'blue'}
                    fillColor={'green'}
                    current={700}
                    align={'left'}
                />
               </div>
                <div>Current Temperature:</div>
                 
            </div>


        );
    }

}

export default MyThermometer

