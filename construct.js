// Activity 1.1 - Writing a constructor
// Create a parameterised constructor function Circle() with the following properties and methods -
// ●	radius: number
// ●	location: {x: number, y: number}
// ●	draw() - method which prints the current location of the circle
// ●	move(nextX, nextY) - takes in two parameters (nextX, nextY) and changes the location of x and y to passed values

//   Q: What all will be the parameters to the Constructor function here?
// Activity 1.2 - Creating objects with a constructor

// ●	Use this Circle constructor and create an object, say circleObj
// ●	Move the circleObj using the move() method from x,y = 0,0 to 10,10 by incrementing x and y by 1.
// ●	Print the location of the circle after each move, using the draw() method



// Constructor function
function Circle(radius, x, y)
{
  this.radius = radius;
  this.location = {x: x, y: y}

  this.draw = function() {
    console.log(`circle is located at (${this.location.x})(${this.location.y})`);
  }

  this.move = function(nextX, nextY) {
       this.location.x += nextX;
       this.location.y += nextY; 
  };
}

// Create an object circleObj by invoking Circle constructor function 
const circleObj = new Circle(20,0,0);

// Move the circleObj using the move() method and printing the location of the circle after each move using draw() method

for (let i = 0; i <=9; i++) {
  circleObj.move(1,1);
  circleObj.draw();
}


// Ans: parameters of Circle constructor would be radius, x and y

