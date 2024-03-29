function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
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
    current.next = newNode;
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
    var currNode = this.findPreviousNode(item);
    currNode.next = currNode.next.next;
}

var link = new LList();
link.insert('Linda', 'head');
link.insert('Katiana', 'Linda');
link.insert('Sheryll', 'Katiana');
link.insert('Sravani', 'Sheryll');
link.insert('Danica', 'Sravani');
link.display();
console.log("Removing Sheryll...");
link.remove('Sheryll');
link.display();

