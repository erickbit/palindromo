//--------------------- palindromo -----------------------------
//nota: no usar string por reservada

function palindromo(cadena) {
    const regexp = /[^A-Za-z0-9]/g;
    const cleanedStr = cadena.replace(regexp, '').toLowerCase();
    for(let i = 0; i <= cleanedStr.length/2; i++){
        
        if(cleanedStr[i] !== cleanedStr[cleanedStr.length-(i+1)]){
            return false;
        }
    }
    return true;
}//palindromo

//--------------------- palabras -----------------------------  
  function palabras(cadena) {
    return cadena.split(" ").length;
  }//palabras 

 //--------------------- letras -----------------------------   
  function letras(cadena) {
    let n = cadena.length;
    return n;
  }

 //--------------------- vocales -----------------------------     
  function vocales(cadena) {
    const count = cadena.match(/[aeiou]/gi).length;
    return count;
  }

   //--------------------- consonantes -----------------------------    
  function consonantes(cadena) {
  
    let r = cadena.match(/[aeiou]/gi);

   
    if(r) {
        return r.length
    } else{
        return 0
    }
  }
  
  module.exports.palindromo = palindromo;
  
  module.exports.palabras = palabras;
  
  module.exports.letras = letras;
  
  module.exports.vocales = vocales;
  
  module.exports.consonantes = consonantes;