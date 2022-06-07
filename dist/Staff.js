var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getName = function () {
        return this.name;
    };
    Staff.prototype.setName = function (value) {
        this.name = value;
    };
    Staff.prototype.getEmail = function () {
        return this.email;
    };
    Staff.prototype.setEmail = function (value) {
        this.email = value;
    };
    Staff.prototype.getAge = function () {
        return this.age;
    };
    Staff.prototype.setAge = function (value) {
        this.age = value;
    };
    return Staff;
}());
var staff = new Staff('Staff 1', 'staff@gmail.com', 20);
var nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
var currentNameStaff = staff.getName();
console.log(currentNameStaff);
