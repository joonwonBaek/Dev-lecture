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
