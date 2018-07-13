import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return (
            <div className="jumbotron">
                <h1>Automated algorithmic trading</h1>
                <p>Best in calss machine learning algorithms.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}
export default HomePage;