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

## Proposta d'exercici per a PelisFirebase

Aquest exercici proposat consisteix en afegir el logo de cada pel·lícula dins la targeta.

Els passos a seguir seran:

1. Modificar la base de dades de Firebase amb el fitxer pelis2.json que se us proporciona, i que inclou una nova clau *Logo* amb el logo de cada pel·lícula.
2. Modificar la plantilla de la targeta, per a que agafe també el logo.
3. Modificar la construcció de cada targeta per a que incloga el logo.

Si teniu l'exemple funcionant, les modificacions del codi són literalment dos línies.

Tal i com s'explica a la [documentació de Bootstrap](https://getbootstrap.com/docs/4.0/components/card/), el format comlet d'una targeta amb imatge serà:

```
<div class="card">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
```

Pel que a efectes pràctcs, la principal modificació serà afegir la línia de la imatge i saber modificar aquesta des de javacript.

### Segona part: Pelis Capacitor

Amb les modificacions que heu fet, modifiqueu també el projecte de Capacitor i actualitzeu l'aplicació per a que mostre també els logos.
