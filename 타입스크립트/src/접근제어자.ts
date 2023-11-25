// 접근 제어자
// public
// protected
// private

class Animal {
  constructor(private name: string, public readonly sound: string) {}
  public static speak() {
    console.log("Animal speak!");
  }
}

class Dog extends Animal {
  constructor(name: string, sound: string, public color: string) {
    super(name, sound);
  }
  getColor() {
    return this.color;
  }
}
Animal.speak();
const dog = new Dog("휜둥이", "멍멍!", "white");
dog.speak(); // '멍멍'
dog.getColor(); // 'white
dog.name; // 에러 (비공개)
dog.sound; // '멍멍!'
dog.color; // 'white
