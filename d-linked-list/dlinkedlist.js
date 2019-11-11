function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node("head");
    this.tail = this.head; // I feel that the tail is useful when we have traverse the Linked list backward
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPreviousNode = findPreviousNode;
    this.displayBkWrd = displayBkWrd;
}

function find(item){
    var currNode = this.head;
    while(currNode.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
    this.tail = newNode;
}

function display(){
    var currNode = this.head;
    while(currNode.next){
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function findPreviousNode(item) {
    var currNode = this.head;
    while(currNode.next && currNode.next.element != item){
        currNode = currNode.next;
    }
    return currNode;
}

function remove(item){
    var currNode = this.find(item);
    if (currNode.next) {
        var prevNode = currNode.previous;
        var nextNode = currNode.next;
        prevNode.next = nextNode;
        nextNode.previous = prevNode;
    }
    if (this.tail.element == currNode.element){
        this.tail = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

function displayBkWrd(){
    var current = this.tail;
    while(current.previous){
        console.log(current.element);
        current = current.previous;
    }
}

var link = new LList();
link.insert('1- Linda', 'head');
link.insert('2- Katiana', '1- Linda');
link.insert('3- Sheryll', '2- Katiana');
link.insert('4- Sravani', '3- Sheryll');
link.insert('5- Danica', '4- Sravani');
link.display();
console.log("Display Backward...");
link.displayBkWrd();
console.log("Removing Sheryll...");
link.remove('3- Sheryll');
link.display();
link.remove('5- Danica');
console.log(link.tail);

