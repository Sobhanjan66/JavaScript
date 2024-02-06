// let & const supports blocked scoping but var doesn't support blocked scoping
// so we generally avoid using var

let a =10 //global scope >> out of any scope 
if(true){ //Blocked Scope or Local Scope
    let a = 20
    const b = 30
    var c = 40
    console.log("Inner: ", a); //Inner:  20
}
//console.log("Outer ", a); //10 (able to print the global value becoz in global scope 'a' has been declared
                          // would throw error if not declared in global scope bcoz of let type  
//console.log(b); //Will Show error because the variable b is const type which supports blocked scoping 
                // & we're are printing out of scope  where there is no other global variable called 'b'
console.log(c); //40 (if comment out previous 2 logs, it'll still print value of c because of var type which doesn't support blocked scoping)

//Nested Scope
//Rule 1: Child function can use parent function's variable but
//Rull 2: Parent function can't use child function's variable out of child function's scope

function one(){
    const username = "Sobhanjan"

    function two(){
        const website = "Youtube"
        console.log(username); //Sobhanjan
    }
    //console.log(website); // Will show error due to Rule 2 
    two()
}
one() //if commented, nothing will print due to not calling parent function causes not executing internal/Child stuffs

//same applicable in If-else Scope
//Declaring function in a little bit another way

const addTwo = function(num){ //Expression type function
    return num+2
}
console.log(addTwo(5)); //7
//But in this declaration type, can't print(Console.log) value before function declaration as could be done in case of usual function declaration





