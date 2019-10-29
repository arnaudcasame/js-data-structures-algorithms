

function List(){
    this.dataStore = [];
    this.listSize = 0;
    this.pos = -1;
    this.length = length;
    this.clear = clear;
    this.contains = contains;
    this.toString = toString;
    this.getElement = getElement;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.find = find;
    this.print = print;
}

var length = function(){
    return this.listSize;
};

var clear = function(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
};

var contains = function(element){
    return this.find(element) < 0 ? false : true;
};

var toString = function(){
    var stringValue = '';
    for(var i=0; i<this.listSize; i++){
        stringValue += (this.listSize -1 === i) ? this.dataStore[i] : this.dataStore[i] + ',';
    }
    return stringValue;
};

var getElement = function(){
    return this.dataStore[this.pos];
};

var insert = function(element, elementToInsert){
    // I call this method THE WAVE
    var pos = this.find(element);
    for(var i=pos; i<this.listSize; i++){
        element = this.dataStore[i+1];
        this.dataStore[i+1] = elementToInsert;
        elementToInsert = element;
    }
    this.listSize++;
};

var append = function(element){
    this.dataStore[this.listSize++] = element;
};

function remove(element){
    var pos = this.find(element);
    if(pos < 0){
        return;
    }
    for(var i=pos; i<this.dataStore.length; i++){
        this.dataStore[i] = this.dataStore[i+1];
    }
    this.dataStore.pop();
    this.listSize--;
};

var front = function(){
    this.pos = 0;
};

var end = function(){
    this.pos = this.listSize - 1;
};

var prev = function(){
    if(this.pos > 0){
        --this.pos;
        return true;
    }
    return false;
};

var next = function(){
    if(this.pos < this.listSize - 1){
        ++this.pos;
        return true;
    }
    return false;
};

var currPos = function(){
    return this.pos;
};

var moveTo = function(pos){
    this.pos = pos;
};

function find(element){
    for(var i=0; i<this.dataStore.length; i++){
        if(element === this.dataStore[i]){
            return i;
        }
    }
    return -1;
}

var print = function(){
    console.warn("ADT-List", this.dataStore);
};


var list = new List();


list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.print();
list.insert(3, 10);

// console.log(list.contains(20));


function insertBiggerNumber(num) {
    while(list.next()){
        if(num < list.getElement()){
            return;
        }
    }
    list.append(num);
}

insertBiggerNumber(11);
list.print();
