import React, { Component } from 'react';
import './Eleve.css';

class Eleve extends Component {
    constructor(props) {
        super(props)
        console.log('[Eleve.js] Constructor');
    }

    //Monte
    componentDidMount() {
        console.log('[Eleve.js] componentDidMount')
    }

    //Modification
    componentDidUpdate() {
        console.log('[Eleve.js] componentDidUpdate')
    }

    //Mise a jour
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Eleve.js] shouldComponentUpdate')
        if (nextProps.nom != this.props.nom) {
            return true;
        }
        return false;
    }
    //Demonte
    componentWillUnmount() {
        console.log('[Eleve.js] componentWillMount')
    }

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
