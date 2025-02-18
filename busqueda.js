
function generarEspacio(n) {
    const nombres = ['Juan', 'Ana', 'Pedro', 'Maria', 'Luis', 'Carlos', 'Elena', 'Sofia', 'David', 'Laura'];
    const lista = [];
  
    
    for (let i = 0; i < n - 1; i++) {
      lista.push(nombres[Math.floor(Math.random() * nombres.length)]);
    }
  

    lista.push('Wally');
    return lista.sort(() => Math.random() - 0.5); 
  }
  
  export { generarEspacio };
  