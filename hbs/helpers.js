const hbs = require('hbs'); // Defnicion para usar parciales de handlebars
//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto)=>{

    let palabras = texto.split(' '); // crea un array con las distintas palabras cortadas en cada espacio 
    palabras.forEach( (palabra, idx) =>{ // Itera cada elemento del array y define el indice
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // slice devuelve el resto de la cadena a partir de una posicion.
    });

    return palabras.join(' '); //Convierte un array en un string juntando sus elementos separados por un espacio.
});