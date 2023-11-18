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
