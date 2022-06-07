class Staff {
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string,
                email: string,
                age: number) {
        this.name = name;
        this.email = email;
        this.age = age
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getAge(): number {
        return this.age;
    }

    setAge(value: number) {
        this.age = value;
    }
}
let staff = new Staff('Staff 1', 'staff@gmail.com', 20);
let nameStaff = staff.getName();
console.log(nameStaff);
staff.setName('Staff 2');
let currentNameStaff = staff.getName();
console.log(currentNameStaff)