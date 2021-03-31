


function Accumulator(startingValue) {
  if (!new.target) {
    new Accumulator(startingValue);
  }

  this.value = startingValue;
  // this.prototype = new ReadProto();
  this.prototype = "test";
}

function ReadProto() {
  this.read = function () {
    if (!new.target) {
      new ReadProto();
    }

    const newValue = +prompt("Enter number:");
    if (isNaN(newValue - newValue)) {
      return;
    }
    return this.value += newValue;
  }
}

Accumulator.prototype = new ReadProto();


const acc = new Accumulator(10);

console.log(acc);

// =======
class Medium {
  constructor(username) {
    this.username = username;
  }
  post(message) {
    const date = new Date();
    this.message = `${message} Date: ${date} by ${this.username}`; 
    return this.message;
  }
}
class Blog extends Medium {
  constructor(domain) {
    super();
    this.domain = domain;
  }
  post(message) { 
    super.post(message);
    this.blogPost = `${this.message} link: ${this.domain}`;
    return this.blogPost;
  }
}
let medium = new Medium('artemhp');
console.log(medium.post('Misconceptions OOP in JS'));
let blog = new Blog('artem.today');
console.log(blog.post('Misconceptions OOP in JS'));