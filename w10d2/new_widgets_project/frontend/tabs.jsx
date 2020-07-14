import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
  
        
    }
    
    
    render() {
        let content = this.props.content
        let title = this.props.title
        return (<h1>{title}: {content}</h1>)
    };
};

export default Tabs;