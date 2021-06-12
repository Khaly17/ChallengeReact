//Librairies
import React, { Component } from 'react';
import './App.css';

//Composants
import Eleve from '../Eleve/Eleve';

class App extends Component {
    render() {
        return (
            <div className="App">

                <h1>Bienvenue dans la classe Terre !!</h1>

                <Eleve nom="Jouahibou DIAME" moyenne="19">
                    "Allez plus loin"
                </Eleve>

                <Eleve nom="Afiss DIA" moyenne="19">
                    "La connaissance partagee "
                </Eleve>

            </div>
        );
    }
}
export default App;
