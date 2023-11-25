// 함수의 명시적 this 타입
interface User {
  name: string;
}
function greet(msg: string) {
  return `Hello ${this.name}, ${msg}`;
}

const baek = {
  name: "Baek",
  greet,
};
baek.greet("Good morning~"); // Hello Baek, Good morning~

const neo = {
  name: "Neo",
};
greet.call(neo, "Good afternoon~"); // Hello Neo, Good afternoon~
