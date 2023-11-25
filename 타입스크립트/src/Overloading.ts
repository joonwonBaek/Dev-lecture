// 함수 오버로딩(Overloading)

function addString(x: string, y: string) {
  console.log(x, y);
  return x + y;
}

function addNumber(x: number, y: number) {
  console.log(x + y);
  return x + y;
}

function add(x: string, y: string): string;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
  console.log(x + y);
  return x + y;
}

addString("Hello", "World");
addNumber(12, 34);
addString("Hello", 34);
addNumber(12, "World");

// 인터페이스 메서드 오버로딩
interface UserBase {
  name: string;
  age: number;
}

interface User extends UserBase {
  // 오버로딩
  updateInfo(newUser: UserBase): User; // UserBase의 객체의 속성을 받는다
  updateInfo(name: string, age: number): User;
} // 같은 updateInfo가 두번 선언되었음. 속성 순서는 중요!!!!

const user: User = {
  name: "Baek",
  age: 27,
  updateInfo: function (nameOrUser: UserBase | string, age?: number) {
    if (typeof nameOrUser === "string" && age !== undefined) {
      this.name = nameOrUser;
      this.age = age;
    } else if (typeof nameOrUser === "object") {
      this.name = nameOrUser.name;
      this.age = nameOrUser.age;
    }
    return this; // 현재 객체 User 반환
  },
};

console.log(user.updateInfo({ name: "Neo", age: 22 })); // UserBase 객체를 받아 else if 부분에 들어간다
// {naem : 'Neo', age : 22, updateInfo: f} // 객체데이터 반환

console.log(user.updateInfo("Leon", 49)); // if에 들어간다
// {naem : 'Leon', age : 49, updateInfo: f} // 객체데이터 반환
