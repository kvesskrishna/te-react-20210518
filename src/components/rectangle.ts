let mytest = () => {
  let a = 5;
  class Rectangle {
    length = 9;
    breadth = 10;
    area() {
      console.log("from area: ", this);
      this.perimeter();
      return this.length * this.breadth;
    }
    perimeter = () => {
      console.log("from perimeter: ", this);
      return 2 * (this.length + this.breadth);
    };
  }
  console.log(this); //
  var rect = new Rectangle();
  rect.area();
  // rect.perimeter();
};
mytest();
