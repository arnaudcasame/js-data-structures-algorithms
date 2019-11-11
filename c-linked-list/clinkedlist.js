function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPreviousNode = findPreviousNode;
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
}

function display(){
    var currNode = this.head;
    while(currNode.next && currNode.next.element !== 'head'){
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
    var prevNode = this.findPreviousNode(item);
    prevNode.next = prevNode.next.next;
}


var link = new LList();
link.insert('1- Linda', 'head');
link.insert('2- Katiana', '1- Linda');
link.insert('3- Sheryll', '2- Katiana');
link.insert('4- Sravani', '3- Sheryll');
link.insert('5- Danica', '4- Sravani');
link.display();
console.log("Removing Sheryll...");
link.remove('3- Sheryll');
link.display();
link.remove('5- Danica');

