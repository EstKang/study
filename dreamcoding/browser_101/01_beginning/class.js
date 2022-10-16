"use strict";

// 1.class - 템플릿, 틀만 정리
class Person {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const esther = new Person('esther', 30);
console.log(esther.name);
console.log(esther.age);


// 2.Getter, Setter
// 사용자의 입력을 고려해서 방어코드를 추가
// get - 값 획득
// set - 값 설정
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // 가상의 프로퍼티에 값을 저장한다
    get age() {
        return this._age;
    }
    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Esther', 'Kang', -1);
console.log(user1.age); // 0


// 3.Fields (public, private)
// Too Soon!
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields
class Experiment {
    publicField = 2;
    // private field - 클래스 내부에서만 접근 가능
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4.static properties and methods 정적 메소드
// Too Soon!
// 공통 정보 사용 시 유용
class Article {
     // 정적 메소드(static으로 선언)는 클래스의 인스턴스 없이 호출이 사능하다
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding


// 6.instanceOf
// 상속 & 다양성
// 동일한 것을 재사용
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
} 

// extends 를 사용하여 상속
class Rectangle extends Shape {}
class Triangle extends Shape {
    // 오버라이드 가능
    draw() {
        // super를 사용하면 기존 함수 호출하고 추가로 붙일 수 있다~
        super.draw(); // Shape의 draw() 호출
        console.log('triangle!');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');
rectangle.draw();
console.log(triangle.getArea());
triangle.draw();
