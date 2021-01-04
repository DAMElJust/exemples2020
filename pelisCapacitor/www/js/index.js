class DBPelis {
    constructor() {


        // Your web app's Firebase configuration
        var firebaseConfig = {
 	    // TO-DO:
            // Aci apeguem la informació que ens ha subministrat
            // Firebase per a la connexió: apiKey, authDomain,
            // projectId, storageBucket, messagingSenderId i  appId.

            /* Compte! No pugueu aquestes credencials si afegiu el 
            vostre projecte a Github! */

            apiKey: "...
            authDomain: "...
            projectId: "...",
            storageBucket: "...",
            messagingSenderId: "...",
            appId: "..."
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // Constant global per accedir al servei de BD
        this.firebaseDB = firebase.database();
    };

    getAllPelis(callback) {
        // Obtenim una referència a l'arrel de la base de dades
        // Quan rebem els resultats, invoquem amb ells la funció de callback
        let refArrel = this.firebaseDB.ref()
        refArrel.once('value', snapshot => {
            callback(snapshot.val().pelis)
            //console.log(snapshot.val());
        });
    }

    createCard(peli) {

        const plantilla = document.querySelector("template.pelis");
        const card = document.importNode(plantilla.content, true);
        card.querySelector(".card-title").innerText = peli.Titol;
        card.querySelector(".card-text").innerText = peli.Director + " (" + peli.Any + ")";
        return card;

    }

    drawCards(pelis) {
        console.log(pelis);

        for (let peli of pelis) {
            let card = this.createCard(peli)
            document.querySelector("#pelisCards").append(card);
        }
    }

}

window.onload = function () {

    let myDB = new DBPelis();
    myDB.getAllPelis(function (pelis) {
      myDB.drawCards(pelis);
    })
            
}
    
