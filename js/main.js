function Console(){
    this.console = document.querySelector("#console");
    this.result = document.querySelector("#combination");
}

Console.prototype.print = function(value, newLine){
    const line = newLine ? "<br/>" : "";
    this.console.innerHTML += value + line;
    console.log(value);
};


Console.prototype.tprint = function(value){
    this.console.innerHTML += '<h4>' + value + '</h4>';
    console.log(value);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const cons = new Console();


// let count = 0;

// arr.forEach(x => {
//     arr.forEach(y => {
//         const res = `(${x}, ${y})`;
//         count++;
//         cons.result.innerHTML = count;
//         cons.print(res, true);
//     });
// });