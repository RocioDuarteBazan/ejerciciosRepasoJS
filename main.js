console.log(beers)

console.log(`----------------------------- Ejercicio 2 -----------------------------`)


// 2) Generar una funcion que reciba como parametro el array de cervezas y 
// un valor de alcohol (numero). La funcion debe devolver un nuevo array con
// las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
// debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu
// para las 12:15 tiramos ruleta a ver hasta donde llegaron


//         FUNCION 2 SIN METODOS
/*

function beersAlcohol(array, valor) {
    let newBeers = []
    for (let beer of array){
        if (beer.abv <= valor){
            newBeers.push({name: beer.name, abv: beer.abv, ibu: beer.ibu})
        }
    }

    console.table(newBeers)
} 

*/

// FUNCION 2 CON METODOS

function beersAlcohol(array, valor) {
    let newBeers = array.filter((element) => element.abv <= valor).map((element) => ({name: element.name, abv: element.abv, ibu: element.ibu}))

    console.table(newBeers)
}

beersAlcohol(beers, 4.5)

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 3 -----------------------------`)

/* 3) Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas más alcohólicas */

//         FUNCION 3 SIN METODOS

/* function top10MostAlcohol(array) {
    let top10Beers = []
    array.sort(function(a, b) {return b.abv - a.abv})

    for (let beer of array){
        if (top10Beers.length < 10){
            top10Beers.push({name: beer.name, abv: beer.abv, ibu: beer.ibu})
        }
    }
    console.table(top10Beers)
} */

//         FUNCION 3 CON METODOS

function top10MostAlcohol(array) {
    let top10Beers = array.sort(function(a, b) {return b.abv - a.abv}).filter((element) => (element.abv)).slice(0,10)

    return console.table(top10Beers)
}

top10MostAlcohol(beers)

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 4 -----------------------------`)


/* 4) Generar una función que reciba como parámetro un array
de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas */

//         FUNCION 4 SIN METODOS

/* function top10LessBitter(array) {
    let top10Beers = []
    array.sort(function(a, b) {return a.ibu - b.ibu})
    for (let beer of array){
        if (top10Beers.length < 10){
            top10Beers.push({name: beer.name, abv: beer.abv, ibu: beer.ibu})
        }
    }
    console.table(top10Beers)
} */

//         FUNCION 4 CON METODOS

function top10LessBitter(array) {
    let top10Beers = array.sort(function(a, b) {return a.ibu - b.ibu}).filter((element) => (element.ibu)).slice(0,10)

    return console.table(top10Beers)
}
top10LessBitter(beers)

console.log(`-----------------------------------------------------------------------`)

console.log(`----------------------------- Ejercicio 5 -----------------------------`)

/* 5) Generar una función que reciba como parámetro un array de cervezas
un nombre de propiedad y un valor booleano. Debe devolver un nuevo array
con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento
de manera ascendente si el tercero es true o descendente si es false

resultado = un array con 10 cervezas ordenadas por la propiedad 
ingresada como segundo argumento
de manera ascendente si el tercero es true o descendente si es false */

// 1: crear funcion que recibe 3 parametros
// 2: preguntar si es true o false para poder
// 3: ordenar por la propiedad ingresada
// 4: separar 10 cervezas (que ordene previamente)
// 5: retornar las 10 cervezas separadas en un array

//         FUNCION 5 SIN METODOS

/* function top10(array, propiedad, orden) {
    let top10Beers = []
    if (orden){
        array.sort(function(a, b) {return a[propiedad] - b[propiedad] } )
    }else {
        array.sort(function(a, b) {return b[propiedad] - a[propiedad] } )
    }
    for (let beer of array){
        if (top10Beers.length < 10){
            top10Beers.push({name: beer.name, abv: beer.abv, ibu: beer.ibu, [propiedad]: beer[propiedad]} )
        }
    }
    console.table(top10Beers)
}

*/

//         FUNCION 5 CON METODOS

function top10(array, propiedad, orden) {
    let top10Beers = []
    if (orden){
        top10Beers = array.sort(function(a, b) {return a[propiedad] - b[propiedad] } ).filter((element) => (element[propiedad])).slice(0,10)
    }else {
        top10Beers = array.sort(function(a, b) {return b[propiedad] - a[propiedad] } ).filter((element) => (element[propiedad])).slice(0,10)
    }
    console.table(top10Beers)
}

top10(beers, "ibu", true)