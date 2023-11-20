//인덱싱

// Array
interface Arr {
  [key: number]: string; // 매개변수 키값이름은 자유
}
const arr: Arr = ["A", "B", "C"];
console.log(arr[1]); // 'b'

// Array-like
interface ArrLike {
  [key: number]: string;
}
const arrLike: ArrLike = { 0: "A", 1: "B", 2: "C" };
console.log(arrLike[1]); // 'b' // 대괄호 표기법으로 인덱싱

// Object
interface Obj {
  [key: string]: string; // 키가 문자일땐 문자로 정의
}
const obj: Obj = { a: "A", b: "B", c: "C" };
console.log(obj["b"]); // 'B' // 대괄호 표기법 가능, 문자형태로 인덱싱 해야한다.
console.log(obj.b); // 'B'

interface User {
  [key: string]: number | string; // 키가 문자일땐 문자 또는 숫자로 정의
  name: string;
  age: number;
}
const user: User = {
  name: "BAEK",
  age: 27,
  zip: 12345,
  isValid: true, // 에러
};

interface User {
  [key: string]: number | string;
  name: string;
  age: number;
}
const user: User = {
  name: "BAEK",
  age: 27,
};

console.log(user["age"]); // 27

interface Payload {
  [key: string]: unknown;
}
function getValues(payload: Payload) {
  // 객체데이터를 받아서 그의 값들만 반환하는 함수
  if (payload && payload.constructor === Object) {
    return Object.keys(payload).map((key) => payload[key]);
  }
}

getValues(user); // ['BAEK', 27]

// 타입 인덱싱
interface User {
  name: string;
  age: number;
}

// interface로 선언한 타입에 대괄호 표기 사용 가능
const a: User["name"] = "BAEK"; // User["name"] => string
const b: User["age"] = "123"; // 에러 발생 => number 타입을 지정해야 한다
const c: User["age"] = 28; // User["age"] => number

// 인터페이스 확장
interface UserA {
  name: string;
  age: number;
}

interface UserB extends UserA {
  isValid: boolean;
}

const user: UserB = {
  name: "BAEK",
  age: 27,
  isValid: true,
};

interface User {
  name: string;
  age: number;
}
interface User {
  isValid: boolean;
}
const user: User = {
  name: "BAEK",
  age: 27,
  isValid: true,
};
