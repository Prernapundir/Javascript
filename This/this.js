// 1. Global {window}
function fun1() {
  console.log("1", this);
}
fun1();

// 2 . Pointing to object
var obj = {
  name: "Prerna",
  fun() {
    console.log("2", this);
  },
};
obj.fun();

//3. Pointing to object
var obj2 = {
  name: "Prerna",
  fun: function () {
    return this;
  },
};
var temp2 = obj2.fun();
console.log("3", temp2);

//4. Pointing to window
var obj3 = {
  name: "Prerna",
  fun: function () {
    return function () { // It's not a method
      return this;
    };
  },
};
var temp3 = obj3.fun();
console.log("4", temp3());

//5.Pointing to window
var obj4 = {
  name: "Prerna",
  fun: () => {
    console.log("5", this);
  },
};
obj4.fun();

//6. Pointing to window
var obj6 = {
  name: "Prerna",
  fun: () => {
    return this;
  },
};
var temp2 = obj6.fun();
console.log("6", temp2);

//7. Pointing to window
var obj7 = {
  name: "Prerna",
  fun: () => {
    return () => {
      return this;
    };
  },
};
var temp3 = obj7.fun();
console.log("7", temp3());

//8.
function User(name) {
  this.name = name;
  console.log("8", this); // user

  this.profile = function () {
    console.log("9", this); //user

    return function () {
      console.log("10", this); //window - if regular func
    };
  };
}
let obj8 = new User("Prerna");
obj8.profile()();

//9.
function User2(name) {
  this.name = name;
  console.log("11", this); // user

  this.profile = function () {
    console.log("12", this); //user

    return () => {
      console.log("13", this); //user - becoz arrow func takes the this of its parent
    };
  };
}
let obj9 = new User2("Prerna");
obj9.profile()();

//10.
function User3(name) {
  this.name = name;
  console.log("14", this); // user

  this.profile = () => {
    console.log("15", this); //user

    return () => {
      console.log("16", this); //user - becoz arrow func takes the this of its parent
    };
  };
}
let obj10 = new User3("Prerna");
obj10.profile()();

//11.
function demo() {
  console.log("18", this); // Here this pointing to obj passed in call func
}
var obj11 = { name: "Prerna" };
demo.call(obj11);

// 12.
function demo2() {
  var func = () => {
    console.log("19", this); // It's taking this of its parent
  };
  func();
}
var obj12 = { name: "Prerna" };
demo2.call(obj12);

//13.
function demo3() {
  console.log(this, "");
  function func() {
    console.log("20", this); // Pointing to window
    function func2() {
      console.log("21", this); //Pointing to window
    }
    func2();
  }
  func(); // fix= func.call(this)
}
obj12 = { name: "Prerna" };
demo3.call(obj12);

// 14.
var t1 = {
  fun() {
    console.log("22", this);
    var self = this; // one way
    function fun2() {
      console.log("23", self);
    }
    fun2();
  },
};
t1.fun();

// 15.
var test = {
  arr: [1, 2, 3, 4],
  fun() {
    console.log(this, "24"); //obj- test
    setTimeout(function () {
      // fix - {Use arrow func}
      console.log(this, "25"); //window
      this.arr.forEach(function (element, i) {
        console.log(element, i); // this.arr will be undefined here
      });
    }, 3000);
  },
};
test.fun();

//16.
var test2 = {
  arr: [1, 2, 3, 4],
  fun() {
    this.arr.forEach(function () {
      console.log(this); //window
    });
  },
};
test2.fun();
