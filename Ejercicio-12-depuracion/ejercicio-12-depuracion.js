function fibonacci(num) {
    let lista = [];
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < num; i++) {
      lista.push(b);
      let temp = a + b;
      a = b;
      b = temp;
    }
  
    return lista;
  }
  
  console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
  
