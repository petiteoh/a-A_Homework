import React from 'react';
import Clock from './clock';
import Tabs from './tabs'

const App = (props) => {
    return (
    <div>
        <Clock /> 
        <Tabs title='blah' content='blah'/>
    </div>
        );
};


{/* <DogDetail key={idx} breed={breed} addVote={this.addVote} />; */}

export default App;