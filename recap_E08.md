# A propos des conditions

Une variable qu'on définit dans un if ou dans un else n'existe qu'à l'intérieur
du if ou du else (dans les accolades) => portée d'une variable

```
  if (age < 12) {
    let price = 8;
  }
  console.log(price);
```

 => JS affiche une erreur "price not found"

```
function computePrice(age) {
  // on peut définir une variable sans lui définir de valeur (utiliser let et pas
  // const)
  let price;

  if (age < 12) {
    // console.log(8);
    price = 8;
  }
  else {
    // console.log(15);
    price = 15;
  }

  // on voudrait retourner le prix (8 ou 15)
  return price;
}
```

# A propos des booléens

```
if (isLightOn) {
  // instructions si la variable isLightOn contient true
} else {
  // instructions si la variable isLightOn contient false
}
```
