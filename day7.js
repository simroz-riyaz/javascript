//ARRAYS
                        const friend1='steven';
                        const friend2='chris';
                        const friend3='lola';
                        
                        const friends = ['steven','chris','lola'];
                        console.log(friends);

                        const Years = new Array(2000,2001,2002,2003);
                        console.log(friends[0]);
                        console.log(friends[2]);

                        console.log(friends.length);
                        console.log(friends[friends.length-1]);

                        friends[2] = 'rose';
                        console.log(friends);

                        //exercise

                        const calcAge = function(birthYear){
                            return 2037-birthYear;
                        }

                        const years = [2000,2002,2004,2006];


                        const age1 = calcAge(years[0]);
                        const age2_ex = calcAge(years[1]);
                        const ageLast = calcAge(years[years.length-1]);
                        console.log(age1, age2_ex, ageLast);

                        const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
                        console.log(ages);

                        //array operations

                        friends.push('rose');
                        console.log(friends);

                        //add elements
                        const newLength = friends.push('jeremy');
                        console.log(friends);
                        console.log(newLength);

                        friends.unshift('rose');
                        console.log(friends);

                        //remove elements
                        friends.pop();
                        console.log(friends);

                        friends.pop();
                        const popped = friends.pop();
                        console.log(popped);
                        console.log(friends);

                        friends.shift();
                        console.log(friends);

                        console.log(friends.includes('steven'));
                        console.log(friends.includes('kat'));      
                        
                        if(friends.includes('steven')) {
                            console.log('you have a friend called steven');
                        }

     //OBJECTS
                        const simrose = {
                            firstName: 'Simrose',
                            lastName: 'Rose',
                            age: 2023 - 1991,
                            job: 'developer',
                            friends: ['steven', 'chris', 'lola']
                        };
                        console.log(simrose);
