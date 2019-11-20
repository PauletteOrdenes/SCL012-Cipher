

let btnCod= document.getElementById('btnCod'); // variable que llama a los valores del botón
btnCod.addEventListener('click', () =>{
    let offset= document.getElementById('offset').value; // agarra valor de offset
    console.log(offset)
    let text= document.getElementById('ingresarTxt').value; // agarra valor de textarea
    // console.log(text)
    // let letras= text.toUpperCase(); // convierte valor de textarea en mayusculas 
    let number = parseInt(offset); // convierte offset en numero para hacer conversión
    document.getElementById('textoSalida').innerHTML= window.cipher.encode(number, text);
});

let btnDec = document.getElementById('btnDec');
btnDec.addEventListener('click', ()=>{
    let offset= document.getElementById('offset').value;
    // console.log(offset);
    let text= document.getElementById('ingresarTxt').value; 
    // console.log (text); 
    let number = parseInt(offset);
    document.getElementById('textoSalida').innerHTML=window.cipher.decode(number, text);
});




