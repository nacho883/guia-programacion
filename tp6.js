
import { generarEspacio } from './busqueda.js';


const listaDeNombres = generarEspacio(100);


console.log(listaDeNombres);


let posicionDeWally = -1;

for (let i = 0; i < listaDeNombres.length; i++) {
  if (listaDeNombres[i] === 'Wally') {
    posicionDeWally = i;
    break;  
  }
}


console.log(`Wally se encuentra en la posición: ${posicionDeWally}`);
