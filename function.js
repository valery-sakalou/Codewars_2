
const a=44;
const b=44;

console.log(`Entered number1: ${a}`);
console.log(`Entered number2: ${b}`);


  function addbinary() {
    let sum_ten=a+b;
    let balance=0;
    let str="";
    let mass=[];
    console.log(`Sum 10x: ${sum_ten}`);
      
    while (sum_ten>1) {
      balance=sum_ten%2;
      mass.push(balance);
      sum_ten=(sum_ten-balance)/2
     }
     mass.push(1);
     console.log(`First mass: ${mass}`);
     massReverse=mass.reverse();
     console.log(`Reverse mass: ${massReverse}`);
     for (let index = 0; index < massReverse.length; index++) {
       str = str+massReverse[index];
     }
     console.log(str);
   }

   addbinary();

     