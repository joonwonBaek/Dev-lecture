// 타입 추론(Inference)
//추론이란? 어떠한 판단을 근거로 삼아 다른 판단을 이끌어 낸다

// 1) 초기화된 변수
let a = "Hello";
a = 123; // 할당 X
a = true; // 할당 X

// 2) 기본값이 지정된 매개변수
function join(a: string, b = ""): string {
  return a + b;
}
join("Hello", "World");
join("Good");
