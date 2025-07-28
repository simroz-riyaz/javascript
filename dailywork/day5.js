// type conversion

                const inputYear = '1991';
                console.log(Number(inputYear), inputYear);
                console.log(Number(inputYear) + 18);

                // type coercion
                console.log('I am ' + 20 + ' years old ' );// coerces number to string
                console.log('23' - '10' - 3); // coerces string to number
                console.log('23'/ '2'); // coerces string to number

                let n = '1' + 1; // coerces number to string
                n = n - 1; // coerces string to number
                console.log(n); // 10

                //equality operators

                const age = 18;
                if (age === 18);
                console.log('you just became an adult!');

                // strict and loose equality operators

                const Age = 18;
                if (Age === 18){
                    console.log('you just became an adult! (loose)');
                }


                const favourite = Number(prompt("What's your favourite color?"));
                console.log(favourite);
                if (favourite === 23) {
                    console.log('Cool! 23 is an amazing number!');
                }
                else if (favourite === 7) {
                    console.log('7 is also a cool number!');
                } else if (favourite === 9) {
                    console.log('9 is also a cool number!');
                } else {
                    console.log('Number is not 23 or 7 or 9');
                }
                if (favourite !== 23) {
                    console.log('Why not 23?');
                }

                //boolean logic

                const hasDriversLicense = true; // A
                const hasGoodVision = true; // B
                console.log(hasDriversLicense && hasGoodVision); // A and B
                console.log(hasDriversLicense || hasGoodVision); // A or B
                console.log(!hasDriversLicense); // not A
                const shouldDrive = hasDriversLicense && hasGoodVision;
                if (shouldDrive) {
                    console.log('rose is able to drive!');
                } else {
                    console.log('Someone else should drive...');
                }

                //switch statement

                const day = 'tuesday';
                switch (day)
                case 'monday':
                    console.log('course');
                    break;

                    case 'tuesday':
                    console.log('picture');
                    console.log('videos');
                    break;

                    case 'wednesday':
                      console.log('white');
                      break;
                      
                      case 'thursday':
                        console.log('black');
                        break;

                    case 'friday':
                        console.log('red');
                        break;

                      case 'saturday':
                        console.log('blue');
                        break;
                        
                    case 'sunday':
                        console.log('green');
                        break;

                        default:
                        console.log('Not a valid day!');
                        

                        // strict
                        'use strict';
                        let hasDriversLicense = false;
                        const passTest = true;
                        if (passTest) hasDriversLicense = true;
                        if (hasDriversLicense) console.log('I can drive :D');

                        //functions

                        function logger(){
                            console.log('My name is Simrose');
                        }
                        logger();
                        logger();
                        logger();

                        function fruitProcessor(apples,kiwi){
                            console.log(apples,kiwi);
                            const Juice = `Juice with ${apples} apples and ${kiwi} kiwi`;
                            return Juice;
                        }
                        const appleJuice = fruitProcessor(5, 0);
                        console.log(appleJuice);

                        
                        

                        
                
                        


        






                


           