var square = (x) => x*x;  //using arrow function
var double = (x) => x*2;
square(double(10));
console.log();
var Compose = function(square,double)
{
    console.log("The value of the square is : " +square);
}

console.log(Compose(20,30));