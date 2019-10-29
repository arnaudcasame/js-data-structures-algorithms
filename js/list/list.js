

function List(){
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
    this.length = this.dataStore.length;
    this.clear = clear;
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

var clear = function(){
    this.dataStore = [];
};

var toString = function(){
    return this.dataStore.toString();
};

var getElement = function(){
    return this.dataStore[this.pos];
};

var insert = function(pos, element){
    this.dataStore.splice(pos, 0, element);
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
    // this.dataStore.splice(pos, num);
};

var front = function(){
    this.pos = 0;
};

var end = function(){
    this.pos = this.length - 1;
};

var prev = function(){
    this.pos = (this.pos === 0) ? 0 : this.pos - 1;
};

var next = function(){
    this.pos = (this.pos === this.length - 1) ? this.post : this.post + 1;
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
};

var print = function(){
    console.log(this.dataStore);
};


var list = new List();


list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.print();
list.remove(3);
list.print();