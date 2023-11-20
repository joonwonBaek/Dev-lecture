// 객체 타입
const obj: { a: number } = { a: 1 };
obj.a = 123;

// 배열 타입
const arr: number[] = [];
arr[0] = 123;

const arr1: Array<string> = [];
arr1[0] = "123";

// 함수 타입
// 1. 함수명 : (인자 : 인자의타입) => 반환 타입 = (인자) => { }
const hello: (a: string) => string = (msg) => {
  return msg;
};
// 2. 함수명 = function (인자: 인자타입) : 반환타입 { }
const hello = function (msg: string, xyz: number): string {
  return msg;
};
// 3. function (인자: 인자타입): 반환타입 { }
function hello(msg: string, xyz: number): string {
  return msg;
}

// enum타입
enum Week {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Week.Mon); // 1
console.log(Week.Sat); // 6
console.log(Week[3]); // Wed
console.log(Week[0]); // Sun

enum Colors {
  Red,
  Green = 4,
  Blue,
}
console.log(Colors.Red); // 0
console.log(Colors[0]); // Red
console.log(Colors.Green); // 4

// Void 타입
const hello: (msg: string) => void = (msg) => {
  console.log(`Hello ${msg}`);
};

hello("World");

//tuple 타입
const tup: [number, number] = [4, 5];
tup[1] = 6; // [4, 6]
tup.push(7); // [4, 6, 7]
tup.splice(2, 0, 6); // [4, 6, 6, 7]

// [id, name, isVaild]
const userA: [number, string, boolean] = [1, "Steve", true];
const userB: [number, string, boolean] = [2, "John", false];

// Never 타입
const nev: [number] = [];
nev.push(6); // never는 할당할 수 없어서 에러가 발생

const myError: (m: string) => never = (msg) => {
  throw `에러! - ${msg}`;
};
try {
  myError("Never 타입..."); // '에러! - Never 타입...'
} catch (e) {
  console.log(e);
}

// Any 타입
let anything: any = "Hello";
anything = 123;
anything = { a: "A" };

const a: string = anything;
const b: number = anything;
const c: boolean = anything;

// Unknown 타입
let anything: unknown = "Hello";
anything = 123;
anything = { a: "A" };

if (typeof anything === "string") {
  const a: string = anything; // 에러 발생 X
}
const b: number = anything; // 에러 발생
const c: boolean = anything; // 에러 발생

// Any vs Unknown
let any: any = "Hello";
console.log(any.toUpperCase()); // OK!
any = 123;
console.log(any.toUpperCase()); // OK! - 런타임 에러 발생!

let unk: unknown = "Hello";
if (typeof unk === "string") {
  console.log(unk.toUpperCase()); // OK!
}

unk = 123;
console.log(unk.toUpperCase()); // Error!

// Union(유니언) 타입
// 2개 이상의 타입이 허용되는 타입

let uni: string | number | number[];
uni = "Hello";
uni = 123;
uni = [1, 2, 3];

// Intersection(인터섹션) 타입
// 2개 이상의 타입이 병합된 타입
type UserA = {
  name: string;
  age: number;
};

type UserB = {
  isValid: boolean;
};

const user: UserA & UserB = {
  name: "C",
  age: 40,
  isValid: true,
};
