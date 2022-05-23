var find = function(array1,isEven)
{
    array1 = [],
    test = function()
    {
        for(i=1 ; i<array1.length ; i++)
        {
            console.log("The value returned is : " +i);
        }
        if(array1[0]===1 && array1.length > 1)
        {
            console.log(array1[i]);
        }
        else 
        {
            return array1[0];
        }
    }
}

function isEven(num)
{
    return(num%2==0);
}
var var1 = isEven(3);
var var2 = isEven(4);

var result = find([1,3,5,4,2],isEven(3));
console.log("The final result of this function is : " +result);


