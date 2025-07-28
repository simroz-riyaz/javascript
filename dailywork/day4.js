
                // strings and template literals

                const firstName = 'Rose';
                const job = 'developer';
                const birthyear = 1991;
                const year = 2037;

                const Rose = "I'm " + firstName + ', a ' + (year - birthyear) + ' years old ' + job + '!';
                console.log(Rose);

                // template literals
                const RoseNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
                console.log(RoseNew);

                // multi-line strings
                console.log(`String with\n\
                multiple\n\
                lines`);

                //taking decisions: if / else statements

                const age = 15;
                if (age >= 18) {
                    console.log('Sarah can start driving license 🚗');
                } else {
                    const yearsLeft = 18 - age;
                    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
                }

                // if else

                const birthYear = 2012;
                let century;
                if (birthYear <= 2000) {
                    century = 20;
                } else {
                    century = 21;
                }
                console.log(century);
