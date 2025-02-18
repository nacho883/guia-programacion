connect2Server();

receive("botonPresionado", (btnID) => {
    console.log("Evento recibido en frontend:", btnID);
});
