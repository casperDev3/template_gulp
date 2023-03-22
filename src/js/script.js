const DATA = [
  {
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    name: "Jane Doe",
    age: 25,
    city: "Boston",
  },
  {
    name: "John Smith",
    age: 17,
    city: "Miami",
  },
];

// const drawSomeElements = () => {
//   // 1.  Create a new element
//   let html = "";
//   // 2.  Add some content to the element
//   DATA.forEach((item) => {
//     html += `<li>${item.name} is ${item.age} years old and lives in ${item.city}</li>`;
//   });
//   // 3. Add the element to the DOM
//   html = `<ul>${html}</ul>`;
//   document.querySelector(".test__items").innerHTML = html;
// };

class Users {
  #adultAge = 21;
  constructor(data) {
    this.data = data;
  }
  drawSomeElements() {
    // 1.  Create a new element
    let html = "";
    // 2.  Add some content to the element
    this.data.forEach((item) => {
      html += `<li>${item.name} is ${item.age} years old and lives in ${item.city}</li>`;
    });
    // 3. Add the element to the DOM
    html = `<ul>${html}</ul>`;
    document.querySelector(".test__items").innerHTML = html;
  }
  calcAdultAndChild() {
    let adult = 0;
    let child = 0;
    this.data.map((item) => {
      item.age >= 18 ? adult++ : child++;
    });
    return { adult, child };
  }
  get adultBaseAge() {
    return this.#adultAge;
  }
  set addAdulttBaseAge(age) {
    this.#adultAge = age;
  }
}

class Chlid extends Users {
  constructor(data, quintity_group) {
    super(data);
    this.quintity_group = quintity_group;
  }
  checkFreePlaces() {
    const CHILD = this.data.filter((item) => item.age < this.adultBaseAge);
    if (CHILD.length < this.quintity_group) {
      return true;
    } else {
      return false;
    }
  }
}

// 1. Start point of the application
document.addEventListener("DOMContentLoaded", () => {
  //   drawSomeElements();
  let user = new Users(DATA);
  let child = new Chlid(DATA, 10);
  console.log(child.adultBaseAge);
  console.log(child.checkFreePlaces());
});
