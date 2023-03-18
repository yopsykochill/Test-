let car = 'Toyota';
let bike: string;
bike = 150;

//number
let num: number = 10;

//boolean
let isLoading: boolean = false;

// undefined
let body: undefined;

// any
let person: any;

//Object
let house: {
  address: string;
  color?: string; // neu co thi kieu du lieu la string neu k thi la undefined
} = {
  address: '',
}; // gia tri khoi tao, neu khong se gay ra loi

house.address = 'Da Nang';

//Array
let products: any[] = []; // neu k dung any[] ma de rong thi no se co kieu du lieu la 'never'
//any[] giup array chua phan tu kieu nao cung dc
products.push(1);
products.push('VietNam');

// string[]
let addresses: string[] = [];
addresses.push('Chau Doc');

//number[]
let numbers: number[] = [];
numbers = [1, 2, 3];

//object array
let people: {
  name: string;
  age: number;
}[] = []; // mot mang co kieu du lieu la object

people.push({
  name: 'Ducky',
  age: 28,
});

//Function
//Ben TypeScript thi chung ta quy dinh kieu du lieu cua parameter va kieu du lieu cua return
const sum = (num1: number, num2: number): string => {
  return num1 + num2 + '';
};

//Union
//Union có thể gộp nhiều kiểu dữ liệu lại với nhau
let price: string | number | boolean;

price = '10';
price = 20;
price = false;

let object: { name: string | number } | { firstName: string } = {
  name: 'Dep Trai',
}; // khai bao truoc
object = { name: 'Tan' };

enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

let size = Sizes.S;

//** INTERFACE */

//khai bao object
interface State {
  name: string;
  isLoading: boolean;
}

let state: State = { name: 'Tan', isLoading: false };

//** type */
// Ông dạy cái này thích dùng Type hơn

type State1 = {
  name: string;
  isLoading: boolean;
};

let statee: State1 = { name: 'Tan', isLoading: true };
//type khác Interface ở chỗ, Type có thể union được, interface khi khai báo thêm lần nữa thì sẽ tự merge
type Name = { name: string };
type Age = { age: number };

type Person = Name | Age; // union
let person1: Person = { name: 'Tan', age: 10 };

//kieu du lieu generic/Type

const handleClick = <Type>(value: Type) => value;

let value = 100;
handleClick<string>('100');

//**Class */
class Person1 {
  private name: string;
  age: number;
  money: number = 100;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  handle() {
    this.money = 100;
  }
}

class People {
  constructor(public name: string, public age: number) {}
}
