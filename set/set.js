function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
    this.displayData = displayData;
}

function add(data){
    if(!this.contains(data)){
        this.dataStore.push(data);
        return true;
    }else{
        return false;
    }
}

function remove(data){
    if(this.contains(data)){
        var pos = this.dataStore.indexOf(data);
        this.dataStore.splice(pos, 1);
        return true;
    }else{
        return false;
    }
}

function size(){
    return this.dataStore.length;
}

/** Returns a new set */
function union(set){
    var tempSet = new Set();
    var setSize = set.size();
    var setMembers = set.show();
    for (var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for(var j = 0; j < setSize; j++){
        if (!tempSet.contains(setMembers[j])) {
            tempSet.add(setMembers[j]);
        }
    }
    return tempSet;
}

/** Returns a new set */
function intersect(set){
    var tempSet = new Set();
    var setData = set.show();
    for(var i=0; i<this.dataStore.length; i++) {
        if (setData.indexOf(this.dataStore[i]) > -1){
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

/** Returns a boolean */
function subset(set) {
    var setSize = set.size();
    var setData = set.show();
    if(setSize < this.dataStore.length){
        return false;
    }
    for(var i=0; i<this.dataStore.length; i++){
        if (setData.indexOf(this.dataStore[i]) < 0){
            return false;
        }
    }
    return true;
}

/** Returns a new set */
function difference(set) {
    var tempSet = new Set();
    var setData = set.show();
    for(var i=0; i<this.dataStore.length; i++){
        if (setData.indexOf(this.dataStore[i]) < 0) {
            tempSet.add(this.dataStore[i]);
        }
    }
    for (var j = 0; j < setData.length; j++) {
        if (this.dataStore.indexOf(setData[j]) < 0) {
            tempSet.add(setData[j]);
        }
    }
    return tempSet;
}

function show(){
    return this.dataStore;
}

function contains(data){
    if(this.dataStore.indexOf(data) === -1){
        return false;
    }else{
        return true;
    }
}

function displayData() {
    for (var i = 0; i < this.dataStore.length; i++) {
        console.log(this.dataStore[i]);
    }
}

// var mySet = new Set();
// mySet.add("Alice");
// mySet.add("Bob");
// mySet.add("Carter");
// mySet.add("Celine");
// mySet.add("Jocelyne");
// mySet.add("Julie");
// mySet.displayData();
// mySet.remove("Carter");
// console.log("Removing Carter...");
// mySet.displayData();

console.log("Creating the first set");
var firstSet = new Set();
firstSet.add(1);
firstSet.add(3);
firstSet.add(4);
firstSet.add(6);
console.log(firstSet.show());

console.log("Creating the second set");
var secondSet = new Set();
secondSet.add(1);
secondSet.add(2);
secondSet.add(3);
secondSet.add(4);
secondSet.add(5);
console.log(secondSet.show());

console.log("Creating the third set");
var thirdSet = new Set();
thirdSet.add(1);
thirdSet.add(2);
thirdSet.add(3);
console.log(thirdSet.show());

console.log("Creating Union");
var test = firstSet.union(secondSet);
console.log(test.show());

console.log("Creating Intersection");
var inter = firstSet.intersect(secondSet);
console.log(inter.show());

console.log("Checking Subset of firstSet");
var sub1 = secondSet.subset(firstSet);
console.log(sub1);
console.log("Checking Subset of secondSet");
var sub2 = firstSet.subset(secondSet);
console.log(sub2);
console.log("Checking if thirdSet is Subset of secondSet");
var sub3 = thirdSet.subset(secondSet);
console.log(sub3);

console.log("Checking diffence between secondSet and firstSet");
var diff = secondSet.difference(firstSet);
console.log(diff.show());