# exemples2020
Exemples d'aplicacions multiplataforma amb tecnologies web

## Proposta d'exercici per a DBElectron.

A l'exemple es comenta com es realitza la comunicació entre els processos Main i Renderer, i es posa com a exemple l'operació d'obtenir el llistat de pel·lícules. Si es fixeu en el codi, també es realitzen altres operacions com afegir nous registres, eliminar-los o modificar-los.

La proposta d'exercici, per veure el procés complet de comunicació és implementar l'operació de búsqueda de pel·lícules, bé per id, director o per títol (al vostre criteri). Per començar l'exercici, al fitxer MainWindow.html haureu de descomentar el següent (cap a la línia 32):

```html
 <div class="col-md-9" style="float:left"><input id="criteriCerca" type="text" class="form-control" placeholder="Criteri" /></div>
<button type="button" class="btn btn-primary col-md-offset-1 col-md-1" id="filterRegisters">Filtra</button>
```

I al fitxer MainWindow.js, cap a la línia 175 el següent codi, que gestiona el clic en el botó de filtrar.

```js
document.querySelector("#filterRegisters").addEventListener("click", function () {
    let criteri=document.querySelector("#criteriCerca").value;
    console.log(criteri);
    alert("Mètode a implementar! Criteri de cerca: "+criteri);
});
```

Dins aquest mètode haureu de començar a implementar la funcionalitat de cerca, afegint els mètodes necessaris en aquest i altres fitxers de l'aplicació.

