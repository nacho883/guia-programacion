import fs from "fs";
import { onEvent, sendEvent, startServer } from "soquetic";

function guardarBoton(botonId) {
   console.log(botonId);
    sendEvent("botonPresionado", botonId);
    let historial = [];

    if (fs.existsSync("historial.json")) {
        const contenido = fs.readFileSync("historial.json", "utf8");
        if (contenido.trim()) {  
            historial = JSON.parse(contenido);
        }
    }

    historial.push({ boton: `Botón ${botonId}` });

    fs.writeFileSync("historial.json", JSON.stringify(historial, null, 2));
}


guardarBoton(1);
startServer(3000);
