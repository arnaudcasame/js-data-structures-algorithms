function Stack(){
    this.top = 0;
    this.length = length;
    this.empty = true;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.dataStore = [];
    this.print = print;
}

function clear(){
    this.top = 0;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
   return this.dataStore[this.top-1];
}

function length(){
    return this.top;
}

function print(){
    console.log(this.dataStore);
}

var stack = new Stack();

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