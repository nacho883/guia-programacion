
import { onEvent, sendEvent, startServer } from "soquetic";
import { SerialPort } from "serialport";
import fs from "fs";

const port = new SerialPort({ path: 'COM4', baudRate: 9600 });

function guardarBoton(boton, estado) {
    sendEvent("botonPresionado", { boton, estado });

    let historial = [];
    if (fs.existsSync("historial.json")) {
        historial = JSON.parse(fs.readFileSync("historial.json", "utf8"));
    }

    historial.push({ boton, estado });

    fs.writeFileSync("historial.json", JSON.stringify(historial, null, 2));
}

port.on("data", function (data) {
    let message = data.toString().trim();
    let [boton, estado] = message.split(":");


    guardarBoton(boton, estado);
});

startServer(3000);