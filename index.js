'use strict';
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.toString = function () {
    return this.name + ' Robot belonging to ' + this.owner;
};

let toy = new Robot('Toy', 2013, 'Avary');

console.log(toy.toString()); // Toy Robot belonging to Avary
console.log('Robot is: ' + toy); // Robot is: Toy Robot belonging to Avary
