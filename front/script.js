connect2Server();

receive("botonPresionado", (data) => {
   alert(data.boton);
});
