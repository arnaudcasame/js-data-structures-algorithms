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

}

/** Returns a new set */
function intersect(set){

}

/** Returns a boolean */
function subset(set){

}

/** Returns a new set */
function difference(set){

}

function show(){
    for(var i=0; i<this.dataStore.length; i++){
        console.log(this.dataStore[i]);
    }
}

function contains(data){
    if(this.dataStore.indexOf(data) === -1){
        return false;
    }else{
        return true;
    }
}

var mySet = new Set();
mySet.add("Alice");
mySet.add("Bob");
mySet.add("Carter");
mySet.add("Celine");
mySet.add("Jocelyne");
mySet.add("Julie");
mySet.show();
mySet.remove("Carter");
console.log("Removing Carter...");
mySet.show();