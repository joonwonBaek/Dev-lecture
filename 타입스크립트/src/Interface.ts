// 인터페이스(Interface)
type UserT = {
  name: string;
  age: number;
};
interface User1 {
  name: string;
  age: number;
  isValid?: boolean;
}
const user: User1 = {
  name: "BAEK",
  age: 27,
};

// 함수 - 호출 시그니처(Call signiture)
interface User {
  name: string;
  age?: number;
}
type GetUserNameT = (u: User) => string;
interface GetUserNameI {
  (u: User): string;
}
const user: User = {
  name: "BAEK",
};
const getUserName: GetUserNameI = (user: User) => user.name;
const username = getUserName(user);
console.log(username); // BAEK

// 클래스 - 생성(구문) 시그니처(Construct signature)
interface IUser {
  name: string;
  getName(): string; // 객체 내의 '메소드'를 정의할땐 이름옆에 () 를 붙인다.
} // 정확하게 클래스의 속성이라기 보단, 클래스에서 만들어지는 인스턴스의 속성

interface UserC {
  // 구문 시그니처
  new (n: string): IUser; // new 키워드
}

class User implements IUser {
  // class 클래스명 implements 클래스 인스턴스 타입
  public name; // 아래 this.name에서 접근할 값.
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const user = new User("BAEK");
user.getName();

function hello(userClass: UserC, msg: string) {
  // 구문 시그니처 적용
  const user = new userClass("BAEK");
  return `Hello ${user.getName()}, ${msg}`;
}
hello(User, "good morning");
// User라는 클래스 자체를 매개변수로 씀
