function Stack(){
    this.top = -1;
    this.length = 0;
    this.empty = true;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.dataStore = [];
    this.print = print;
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.top = this.length = 0;
}

function push(element) {
    this.dataStore[++this.top] = element;
    this.length++;
    this.empty = false;
}

function pop() {
    var data = [];
    var lastElement = this.dataStore[this.length - 1];
    for(i=0; i<this.length - 1; i++){
        data[i] = this.dataStore[i];
    }
    this.dataStore = data;
    this.top--;
    this.length--;
    this.empty = this.length ? true : false;
    return lastElement;
}

function peek() {
   return this.dataStore[this.top];
}

function print(){
    console.log(this.dataStore);
}

var stack = new Stack();

// debugger;

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log(stack.peek());
stack.pop();
stack.pop();
stack.print();
stack.pop();
console.log(stack.peek());