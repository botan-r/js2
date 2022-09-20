const counter = (function (i=1){
    function fn (){
        return i++;
    }
    return fn;
})()

console.log(counter());
console.log(counter());
console.log(counter());