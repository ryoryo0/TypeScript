type Admin = {
    name: string;
    privileges: string[];
}

type Employeee = {
    name: string;
    startDate: Date;
}

type ElevatedEmploee = Admin & Employeee;

const e1: ElevatedEmploee = {
    name: '原田',
    privileges: ['原田'],
    startDate: new Date(),
}

type Combinable1 = string | number;
type Combinable2 = Date | number;

type Combinable3 = Combinable1 & Combinable2;

type newEmployeee = Admin | Employeee;

function unknowEmployee(emp: newEmployeee) {
    if ('privileges' in emp) [
        console.log(emp.privileges)
    ]
    
    if ('startDate' in emp) [
        console.log(emp.startDate)
    ]
}

unknowEmployee(e1);

// 型ガードに関する練習
//　車について

class Car {
    drive() {
        console.log('運転中...');
    }
}

class Track {
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    drive() {
        console.log('トラックを運転中...');
    }

    loadCargo() {
        console.log(`荷物の重量は${this.amount}kgです`);
    }
}

type Vehicle = Car | Track;

let v1 = new Car();
let v2 = new Track(200);

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();

    if ('loadCargo' in vehicle) {
        vehicle.loadCargo();
    }
}

useVehicle(v1);
useVehicle(v2);


interface Bird {
    type: 'bird',
    flyingSpeed: number;
}

interface Horse {
    type: 'horse',
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
    let speed;

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log('移動速度' + speed );
}

moveAnimal({type: 'bird', flyingSpeed: 10});

// 型キャストについて
let userInput = document.querySelector('input');

if (userInput) {
    (userInput as HTMLInputElement).value = 'こんにちは';
}

// インデックス型について
interface ErrorContainer {
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email: '正しいメール￥アドレスではありません',
    userName: 'ユーザー名に記号を含める事はできません',
};