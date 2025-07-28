//functions

function logger(){
console.log('My name is Simrose');
}
  logger();
  logger();
  logger();

  //function to process fruits
  function fruitProcessor(apples,kiwi){
    console.log(apples,kiwi);
    const Juice = `Juice with ${apples} apples and ${kiwi} kiwi`;
    return Juice;
     }
    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);

                        
    //function declarations and expressions 
     function calcAge1(birthYear) 
     { 
return 2037 - birthYear;
 } 
      const age = calcAge1(2005);
      console.log(age1);

    //function expression
    const calvAge2 = function (birthYear)
    {
    return 2037-birthYear;
     }

     const age2 = calcAge2(2005);
    console.log(age1,age2);

    //arrow functions
    const calcAge3 = birthYear=> 2037-birthYear;
    const age3 = calcAge3(2005);
    console.log(age3);

    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2037-birthYear;
         const retirement = 65- age;

     //return retirement
     return `${firstName} retires in ${retirement}years`;
     }

    console.log(yearsUntilRetirement(2005, 'Simrose'));
                    
    //functions calling other functions 

    const cutPieces = function(fruit) {
    return fruit*4;
      }
    const fruitProcessor = function(apples,oranges){
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

   const juice = `Juices with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
    return juice;
    };
     console.log (fruitProcessor(2, 3));