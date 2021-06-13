//Librairies
import React, { useState } from 'react';
import './App.css';

//Composants
import Eleve from '../../components/Eleve/Eleve';

function App() {

    // state = {
    //     eleves: [
    //         { nom: 'Jouahibou DIAME', moyenne: 19 },
    //         { nom: 'Afiss DIA', moyenne: 19 },
    //         { nom: 'ahmed Diop', moyenne: 25 }
    //     ]
    // }
    const [eleves, setEleve] = useState([

        { nom: 'Jouahibou DIAME', moyenne: 19 },
        { nom: 'Afiss DIA', moyenne: 19 },
        { nom: 'ahmed Diop', moyenne: 25 }
    ]
    );
    const [maintenance, setMaintenance] = useState(false);

    const buttonClickedHandler = nouveauNom => {
        // const newStat = [...this.state.eleves];
        // newStat[0].nom = nouveauNom

        // //creation du state a partir de zero
        // this.setState({
        //     ...this.state,
        //     eleves: newStat
        // });
        const nouveauxEleves = [...eleves];
        nouveauxEleves[0].nom = nouveauNom;
        setEleve(nouveauxEleves)
    }

    return (
        <div className="App">

            <h1>Bienvenue dans la classe Terre !!</h1>

            <button onClick={buttonClickedHandler.bind(this, "Moi")}>Transformer le premier eleve</button>

            <Eleve
                nom={eleves[0].nom}
                moyenne={eleves[0].moyenne}
                clic={() => buttonClickedHandler("Khaly")}
            >
                "Allez plus loin"
            </Eleve>

            <Eleve
                nom={eleves[1].nom}
                moyenne={eleves[1].moyenne}
                clic={() => buttonClickedHandler("Omar")}
            >
                "La connaissance partagee "
            </Eleve>

            <Eleve
                nom={eleves[2].nom}
                moyenne={eleves[2].moyenne}
                clic={() => buttonClickedHandler("Amar")}
            >
                "Connais toi meme !"
            </Eleve>

        </div>
    );
}
export default App;
