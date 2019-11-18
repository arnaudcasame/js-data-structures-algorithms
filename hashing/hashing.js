function HashTable(){
    this.table = new Array(137);
    this.put = put;
    this.get = get;
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.betterHash = betterHash;
}

function put(data) {
    var hashed = this.betterHash(data);
    this.table[hashed] = data;
}

function get(key) {
    return this.table[key];
}

function simpleHash(data) {
    var total = 0;
    for (const index in data) {
        total += data.charCodeAt(index);
    }
    return total % this.table.length;
}

function showDistro() {
    for (const hash in this.table) {
        if (this.table.hasOwnProperty(hash)) {
            const data = this.table[hash];
            console.log("Key: " + hash + ", Value: " + data);
        }
    }
}

function betterHash(data){
    var H = 37, total = 0;
    for(var index in data){
        total += H * (total + data.charCodeAt(index));
    }
    return total % this.table.length;
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = ""; 
        for(var j=1; j<=9; ++j){
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

// var table = new HashTable();
// table.put("Nina");
// table.put("Pinta");
// table.put("Santa Maria");
// table.put("Fort de Joux");
// table.put("Clayton");
// table.put("Raymond");
// table.showDistro();


var numStudents = 10; var arrSize = 97; var idLen = 9;
var students = new Array(numStudents);
genStuData(students);
console.log ("Student data: \n");
for (var i = 0; i < students.length; ++i) {
   console.log(students[i].substring(0, 9) + " " + students[i].substring(9)); // prints : 016764785 58
}
console.log("\n\nData distribution: \n");
var hTable = new HashTable();
for (var i = 0; i < students.length; ++i) {
   hTable.put(students[i]);
}
hTable.showDistro(); // Key: 105, Value: 01676478558