// 타입 가드

// 1)
const btn = document.querySelector("button");
if (btn instanceof HTMLButtonElement) {
  btn.classList.add("btn");
  btn.id = "abc";
}

// 2)
function toTwoDecimals(val: number | string) {
  if (typeof val === "number") {
    val.toFixed(2);
  } else {
    val.slice(0, 2);
  }
}
// 3)
type UserA = { name: string; age: number };
type UserB = { id: string; email: string };

function isUserA(user: unknown): user is UserA {
  if (user && user.constructor === Object) {
    const u = user as UserA; // user를 UserA처럼 사용하기 위해 타입 단언
    return typeof u.name === "string" && typeof u.age === "number";
  }
  return false;
}
fetch("URL")
  .then((res) => res.json())
  .then((user: UserA | UserB) => {
    if (isUserA(user)) {
      console.log(user.name[0]);
      console.log(user.age - 10);
    }
  });
