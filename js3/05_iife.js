// Immediately Invoked Function Expressions (IIFE)- It is used to avoid the pollution which may occur due to global scope variables/ to avoid global scope pollution iife is used

(function chai(){
    // named iife
   // console.log("DB has accessed");
})();// ; is important to end the scope of above function

(()=>{
    //unnamed iife
   // console.log("DB has denied");
})();


( (name)=>{
    // parameterised iife
    console.log(`DB has denied ${name}`);
})("Ankit")
