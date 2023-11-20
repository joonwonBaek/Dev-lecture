// 타입 별칭(ALias)

type MyTypeName = string | number;
type MyArray = MyTypeName[]; // 별칭 사용
type UserA = {
  name: string;
  age: number;
};
type UserB = {
  isValid: boolean;
};
type UserX = UserA & UserB;

const a: MyTypeName = "A"; // MyTypeName은 string 또는 number 할당 가능
const b: MyArray = [1, "A", "B", 2, 3]; // MyArray는 MyTypeName[]과 같으므로 배열 item으로 string 또는 number 할당 가능
const userA: UserA = {
  name: "BAEK",
  age: 27,
};
const userB: UserB = {
  isValid: true,
};
const userX: UserX = {
  name: "BAEK",
  age: 27,
  isValid: true,
};
