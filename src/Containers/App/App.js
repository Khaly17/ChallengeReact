//Librairies
import React, { Component } from 'react';
import './App.css';

//Composants
import Eleve from '../../components/Eleve/Eleve';

class App extends Component {
    state = {
        eleves: [
            { nom: 'Jouahibou DIAME', moyenne: 19 },
            { nom: 'Afiss DIA', moyenne: 19 }
        ]
    }

    buttonClickedHandler = nouveauNom => {
        const newStat = [...this.state.eleves];
        newStat[0].nom = nouveauNom
        this.setState({
            ...this.state,
            eleves: newStat
        });
    }

    render() {
        return (
            <div className="App">

                <h1>Bienvenue dans la classe Terre !!</h1>

                <button onClick={this.buttonClickedHandler.bind(this, "Moi")}>Envoyer</button>

                <Eleve
                    nom={this.state.eleves[0].nom}
                    moyenne={this.state.eleves[0].moyenne}
                    clic={() => this.buttonClickedHandler("Khaly")}
                >
                    "Allez plus loin"
                </Eleve>

                <Eleve
                    nom={this.state.eleves[1].nom}
                    moyenne={this.state.eleves[1].moyenne}
                    clic={() => this.buttonClickedHandler("Omar")}
                >
                    "La connaissance partagee "
                </Eleve>

            </div>
        );
    }
}
export default App;
