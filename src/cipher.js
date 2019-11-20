window.cipher = {
  encode: (number, text) => {

    let resultado = ''; // variable vacía para el resultado
    for (let i = 0; i < text.length; i++) {
      let txt = text.charCodeAt(i); // saca codigo ASCII de las letras
      // console.log(txt);

      if (txt >= 65 && txt <= 90) {
        let formulaAscii = (txt - 65 + number) % 26 + 65;
        let letraCifrada = String.fromCharCode(formulaAscii); // pasa el numero ASCII a letra
        // console.log(letraCifrada);
        resultado += letraCifrada;
      } else if (txt >= 97 && txt <= 122) { // para minusculas
        let formulaAscii = (txt - 97 + number) % 26 + 97;
        let letraCifrada = String.fromCharCode(formulaAscii);
        // console.log(letraCifrada);
        resultado += letraCifrada;
      } else { // para todo lo demás
        resultado += text.charAt(i);
      }

    }
    return resultado;
  },

  decode: (number, text) => {
    let resultado='';
    for(let i = 0; i < text.length; i++){
      let txtascii = text.charCodeAt(i)
      console.log(txtascii)
      if(txtascii >= 65 && txtascii <= 90){
        console.log("hola")
        let formulaAscii = (txtascii-90-number) % 26 +  90;
        let letraDescifrada = String.fromCharCode(formulaAscii);
        resultado += letraDescifrada;
      } else if (txtascii >= 97 && txtascii <= 122){
        let formulaAscii = (txtascii - 122 - number) % 26 + 122;
        let letraDescifrada = String.fromCharCode (formulaAscii);
        console.log (letraDescifrada);
        resultado += letraDescifrada;
      } else {
        resultado += text.charAt(i);
      }
     
    }
    return resultado;

  }
}