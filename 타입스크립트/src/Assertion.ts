//타입 단언(Assertion)

// 1)
const btn = document.querySelector("button") as HTMLButtonElement;
btn.classList.add("btn");
btn.id = "abc";

const btn1 = document.querySelector("button")!;
btn1.classList.add("btn");
btn1.id = "abc";

const btn2 = document.querySelector("button");
btn2!.classList.add("btn");
btn2!.id = "abc";

// 2)
function toTwoDecimals(val: number | string, isNum: boolean) {
  if (isNum) {
    (val as number).toFixed(2);
  } else {
    (val as string).substring(0, 2);
  }
}

// 3)
const json = '{"name": "BAEK", "age": 27}';
const user = JSON.parse(json) as { name: string; age: number };

// 4)
let num!: number;
console.log();
