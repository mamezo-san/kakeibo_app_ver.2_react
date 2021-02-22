import React from 'react';
import EventIndex from './Event_index';
import Categori from './Categori';

class Main extends React.Component {
    render(){
        const lifeMoneys =[
            {name:'電気代', money:'12000'},{name:'ガス代', money: '4000'}]
        return(
            <React.Fragment>
                <EventIndex />
                <div>
                {lifeMoneys.map((lifeMoney,index)=>{
                    return(
                    <Categori
                    name={ lifeMoney.name }
                    money={ lifeMoney.money }
                    key={ index }
                    />)
                })}
                </div>
            </React.Fragment>
        )
    }
}

export default Main;