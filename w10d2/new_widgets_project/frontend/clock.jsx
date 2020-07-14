import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
  
        // debugger
        this.state = {
            time: new Date()//.toLocaleString()
        };

        this.tick = this.tick.bind(this);
    }
    
    tick() {
        // const { time } = this.state;
        this.setState({ time: new Date() })
    }
    
    componentDidMount() {
        // debugger;
        this.inverval = setInterval(this.tick, 1000) 
    }

    componentWillUnmount(){
        // debugger;
        clearInterval(this.inverval);
        this.interval = 0;
    }
    
    render() {
        // let hours = this.state.time.getHours
        // debugger
        // const timeString = [this.hours, this.minutes, this.seconds].join(":");
        return (
            <div className='clock'>
                <h1> Clock </h1>
                <span>
                    <p className='time'>
                        Time: {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()} EST
                    </p>
                    <p className="date">
                        Date: {this.state.time.getMonth()}/{this.state.time.getDate()}/{this.state.time.getUTCFullYear()}
                    </p>
                </span>
            </div>
           
        ); 
    }
}

export default Clock;