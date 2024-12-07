class student {
    constructor(name) {
        this.fullName = name;  // Initializes the fullName property
    }
    
    getname() {
        return this.fullName;  // Should return fullName, not name
    }
}

class Students extends student {
    constructor(name) {
        super(name);  // Call the parent class constructor to set fullName
    }
}

let obj = new Students('Alex');
console.log(obj);  // Prints the object
console.log(obj.getname());  // Prints "Alex"




