//Immediately Invoked Function Expression (IIFE)
//Used to run the function immediately without being affected with global scope values
(function database(){
    //named IIFE
    console.log(`DB CONNECTED`); //DB CONNECTED
})();

const database2 = (function(num1,num2){
    //named IIFE
     console.log(num1+num2); //7
})(3,4);

const database3 = ((name) => {
    //named IIFE
    console.log(`Database connected ${name}`); //Database connected Sobhanjan
})('Sobhanjan');

((name) => {
    //Unnamed IIFE
    console.log(`${name}, database is conmnected`) //Subhangi, database is conmnected
})("Subhangi");