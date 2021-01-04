class DBPelis {
    constructor() {


        // Your web app's Firebase configuration
        var firebaseConfig = {
            // TO-DO
            // Aci apeguem la informació que ens ha subministrat
            // Firebase per a la connexió: apiKey, authDomain,
            // projectId, storageBucket, messagingSenderId i  appId.

            /* Compte! No pugueu aquestes credencials si afegiu el 
            vostre projecte a Github! */

            apiKey: "...",
            authDomain: "...",
            projectId: "...",
            storageBucket: "...,
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
    let user;

    // Autenticació
    var provider = new firebase.auth.GoogleAuthProvider();


    document.querySelector("#logoutBt").addEventListener("click", function () {
        document.querySelector("#username").style.display = "none";
        document.querySelector("#imageProfile").style.display = "none";
        document.querySelector("#logoutBt").style.display = "none";
        document.querySelector("#loginBt").style.display = "inline";
        firebase.auth().signOut();
        window.location.reload();
    })
    document.querySelector("#loginBt").addEventListener("click", function () {
        firebase.auth().signInWithRedirect(provider);
    })

    firebase.auth().getRedirectResult().then(result => {
        // Si l'usuari està registrat...
        if (result.user || firebase.auth().currentUser) {
            let user = firebase.auth().currentUser;
            let name = user.displayName;
            let photoUrl = user.photoURL;

            // Per si volem informació sobre l'email i el uid de l'usuari en el projecte Firebase
            //let email = user.email;
            //let emailVerified = user.emailVerified;
            // let uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use

            // Configurem i mostrem el nom i la imatge d'usuari, així com el botó de logout
            document.querySelector("#username").innerText = name.split(" ")[0];
            document.querySelector("#imageProfile").src = photoUrl;
            document.querySelector("#username").style.display = "inline";
            document.querySelector("#imageProfile").style.display = "inline";
            document.querySelector("#logoutBt").style.display = "inline";
            document.querySelector("#loginBt").style.display = "none";
            
            document.querySelector(".loader").style.display="block";

            myDB.getAllPelis(function (pelis) {
                document.querySelector(".loader").style.display="none";
                myDB.drawCards(pelis);
            })
            
        }
    });
    
}; 
