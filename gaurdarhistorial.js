import { onEvent, sendEvent, startServer } from "soquetic";
import { SerialPort } from "serialport";
import fs from "fs";
import { DelimiterParser } from '@serialport/parser-delimiter';

const port = new SerialPort({ path: 'COM7', baudRate: 9600 });
var parser = port.pipe(new DelimiterParser({ delimiter: '\n' }));

function guardarBoton(boton, estado) {
    sendEvent("botonPresionado", { boton, estado });

    let historial = [];
    if (fs.existsSync("historial.json")) {
        historial = JSON.parse(fs.readFileSync("historial.json", "utf8"));
    }

    historial.push({ boton, estado });

    fs.writeFileSync("historial.json", JSON.stringify(historial, null, 2));
}

parser.on("data", function (data) {
    console.log("Data received", data.toString())
    let message = data.toString().trim().replace("{", "").replace("}", "");
    let [boton, estado] = message.split(":");
    guardarBoton(boton, estado);
});

startServer(3000);
