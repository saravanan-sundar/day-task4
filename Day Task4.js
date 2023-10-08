//anonymonus print odd number
const arr=[1, 2, 3, 5, 6, 7, 8, 9, 11];
function printodd(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }

}
printodd(arr);

//iife

(function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i]);
        }
    }
})(arr);

//anonymonus sum of all number in array
 
 let sum=0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        console.log(sum);
    }
    //median of two sort array with same size
    
    var ar1 = [ 1, 12, 15, 26, 38 ];
    var ar2 = [ 2, 13, 17, 30, 45 ];

    var i=ar1.length;
    var j= ar2.length;
    
    var l= i+j;
    
    var ar3= ar1.concat(ar2);
    
    console.log("median="+ (ar3,l));
    
    // remove the duplicate arry
    const arr1=[1,3,4,3,5,6,6];
    function removeduplicate(data){
       return data.filter((value,index) => data.indexOf(value)=== index);
        
    }
    console.log(removeduplicate(arr1));
    
    //prime number 
    const arr2=[3,5,6,7,8,9,34,56,78];
    function primenumber(numArray){
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) 
            return false;
          }
          return true;
        });
        
    }

   // console.log(primenumber());
    

//palindrome in anonymonus function

    let str1="madam";
    let str2="saravanan";
    function findpalindrome(input){
        
        if(input===input.split('').reverse().join('')){
        return true;
    }
        else{
            return false;

        }
        
    }
     console.log(findpalindrome(str1))

     
    
    
     
     