function Dictionnary() {
    this.dataStore = new Array();
    this.add = add;
    this.remove = remove;
    this.find = find;
    this.showAll = showAll;
}

function add(key, value){
    this.dataStore[key] = value;
}

function remove(key){
    delete this.dataStore[key];
}

function find(key) {
    return this.dataStore[key];
}

function showAll(){
    for (const key in this.dataStore) {
        if (this.dataStore.hasOwnProperty(key)) {
            console.log(key + ': ' + this.dataStore[key]);
        }
    }
}

var charac = new Dictionnary();

charac.add('eyes', 'brown');
charac.add('skin', 'black');
charac.add('name', 'Arnaud Casame');
charac.add('height', '6.2ft');
charac.add('weight', '120lbs');
charac.add('hobbies', 'Programming, Reading, Video Games');
charac.showAll();