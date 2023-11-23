// Partial
interface User {
  name: string;
  age: number;
}

const userA: User = {
  name: "A",
}; // 필수 속성이 모든 정의되지 않아 에러 발생

const userB: Partial<User> = {
  name: "B",
}; // 필수 속성 => 선택 속성으로 변경

// interface PartialUser { // Partial타입의 구조
//   name?: string;
//   age?: number;
// }

// Required
interface User {
  name?: string;
  age?: number;
}

const userA: User = {
  name: "A",
};

const userB: Required<User> = {
  name: "B",
}; // 선택 속성 => 필수 속성으로 변경되어 에러 발생

// Readonly
interface User {
  name: string;
  age: number;
}

const userA: User = {
  name: "A",
  age: 23,
};

const userB: Readonly<User> = {
  name: "B",
  age: 13,
};

// interface ReadonlyUser { // Readonly타입의 구조
//   readonly name: string;
//   readonly age: number;
// }

userA.age = 25;
userB.age = 23; // 에러 발생

// Record
type Names = "neo" | "lewis";

const developers: Record<Names, number> = {
  neo: 10,
  lewis: 20,
};

// type RecordNames = { // Record타입의 구조
//   neo: number;
//   lewis: number;
// };

//Pick
interface User {
  name: string;
  age: number;
  email: string;
  isValid: boolean;
}

const user: Pick<User, "name" | "email"> = {
  // name, email만 선택
  name: "Neo",
  email: "abc@gmail.com",
  age: 22, // 에러 발생
  isValid: true, // 에러 발생
};

// interface PickUser { // Pick타입의 구조
//   name: string;
//   email: string;
// }

// Omit
interface User {
  name: string;
  age: number;
  email: string;
  isValid: boolean;
}

const user: Omit<User, "name" | "email"> = {
  // name, email을 제외한 나머지 선택
  name: "Neo", // 에러 발생
  age: 22,
  isValid: true,
};

// interface OmitUser { // Omit타입의 구조
//   age: number;
//   isValid: boolean;
// }

// Exclude
type T = number | string | boolean;

const a: Exclude<T, number> = "Only string";
const b: Exclude<T, number> = 123; // 에러 발생

// Extract
type T = number | string | boolean;
type U = number | boolean | string[];

const a: Extract<T, U> = 123;
const b: Extract<T, U> = "Only number"; // 에러 발생

// ReturnType
function hello(name: string) {
  return `Hello, ${name}!`;
}

const a: ReturnType<typeof hello> = "Only string";
const b: ReturnType<typeof hello> = 123; // 에러 발생

// Awaited
const promise = Promise.resolve(true);
const a: Awaited<typeof promise> = 123; // 에러 발생, Promise의 반환값은 boolean
