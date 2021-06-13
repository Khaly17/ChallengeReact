import React, { Component } from 'react';
import './Eleve.css';

class Eleve extends Component {
    render() {
        return (
            <div className="eleve">
                <h1 onClick={this.props.clic}>{this.props.nom}</h1>
                <p>Moyenne scolaire : <b>{this.props.moyenne}/20</b></p>
                <p>Agee : {Math.floor(Math.random() * 100)}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

export default Eleve;
