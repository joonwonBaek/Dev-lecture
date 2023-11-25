// 제네릭(Generic)

interface ToObj<T> {
  a: T;
  b: T;
}

function toObj<T extends string | number | boolean>(a: T, b: T): ToObj<T> {
  return { a, b };
}

toObj<string>("a", 12); // 에러 발생
toObj(1, 2); // O
toObj(true, false); // O

// 타입 별칭 제네릭
// interface User<T, U, V> {
//   name: T;
//   age: U;
//   isValid: V;
// }

type User<T, U, V> = { name: T; age: U; isValid: V } | [T, U, V];
type U = User<string, number, boolean>;

const heropy: U = { name: "heropy", age: 30, isValid: true };
const neo: U = { name: "neo", age: 55, isValid: true };
const amy: U = { name: "amy", age: 20, isValid: false };

const evan: U = ["evan", 77, true];
const lewis: U = ["lewis", 40, false];
const leon: U = ["leon", 33, true];

// 클래스 제네릭
type;
class Basket<T extends string> {
  public items: T[];
  constructor(...rest: T[]) {
    this.items = rest;
  }
  putItem(item: T) {
    this.items.unshift(item);
  }
  takeOutItems(count: number) {
    return this.items.splice(0, count);
  }
}

const fruitsBasket = new Basket("Apple", "Banana", "Cherry");
// 명시적으로 타입변수를 선언하지 않아도 들어오는 데이터의 타입으로 타입추론 가능(string)
fruitsBasket.putItem("Orange");
const fruits = fruitsBasket.takeOutItems(2);
console.log(fruits); // ["Orange", "Apple"]
console.log(fruitsBasket.items); // ["Banana", "Cherry"]

const moneyBasket = new Basket(100, 1000, 10000);
// 명시적으로 타입변수를 선언하지 않아도 들어오는 데이터의 타입으로 타입추론 가능(number)
moneyBasket.putItem(40000);
const money = moneyBasket.takeOutItems(2);
console.log(money); // [50000, 100]
console.log(moneyBasket.items); // [1000, 10000]

// 제네릭의 조건부 타입
type MyType<T> = T extends string | number ? boolean : never;

const a: MyType<string> = true;
const b: MyType<number> = true;
const c: MyType<null> = true;

type MyExclude<T, U> = T extends U ? never : T;
// string | number | boolean | null extends boolean | null ? never : string | number | boolean | null
type MyUnion = string | number | boolean | null;

const d: Exclude<MyUnion, boolean | null> = 123;
// string | number -> T (string | number)
// boolean | null -> never

// ispropertyType
type IsPropertyType<T, U extends keyof T, V> = T[U] extends V ? true : false;

type Keys = keyof User;
interface User {
  name: string;
  age: number;
}

const n: IsPropertyType<User, "name", number> = true;
// User의 name 타입이 number인지 확인
// User["name"] -> string이므로 error

// 조건부 타입 infer
type ArrayItemType<T> = T extends (infer I)[] ? I : never;
// infer I -> 타입추론을 통해 I의 타입을 추론
const numbers = [1, 2, 3];
const a: ArrayItemType<number[]> = 123;
const b: ArrayItemType<boolean> = 123; // boolean이 아니므로 error(never타입이어야 함)

const fruits = ["Apple", "Banana", "Cherry"];
const hello = () => {};

const c: ArrayItemType<typeof fruits> = "ABC";
// typeof fruits -> string[]
const d: ArrayItemType<typeof hello> = "ABC";
// typeof hello -> () => void
// hello의 타입은 함수이고 infer I는 배열이기 때문에 타입 추론을 할 수 없어 d는 never타입이어야 함

type SecondArgumentType<T> = T extends (f: any, s: infer S) => any ? S : never;
// (a:string, b:number) => void extends (f:any, s: infer S) => any ? S : never
// 비교하면 infer S -> number로 추론아 되어서 true를 반환하고 S는 number타입이 됨
function hello(a: string, b: number) {}

const a: SecondArgumentType<typeof hello> = 123;
// typeof hello -> (a:string, b:number) => void

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// 함수 타입만 사용할 수 있고 함수의 인자의 타입을 반환한다
// MyReturnType은 유틸리티 타입인 ReturnType과 같은 기능을 한다
function add(x: string, y: string) {
  return x + y;
}

const a: ReturnType<typeof add> = "Hello";
// typeof add -> (x:string, y:string) => string
