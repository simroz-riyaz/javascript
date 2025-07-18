//challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark ** 2);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn,);

if(bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
}
else{
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}
