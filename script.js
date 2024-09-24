// creating the prompt function

var choice = prompt("Select the shape you want to select. \n 1.Area of rectangle. \n 2.Area of triangle. \n 3.Area of circle. \n 4.Area of Square. \n Please enter your lengths values only in cm.");

// creating the logic

if (choice == "1"){
    var l = prompt("Enter the lenght: ");
    var b = prompt("Enter the breadth: ");
    var result1 = Number(l) * Number(b);
    alert("The area of the rectangle is " + result1 + "cm");
}

else if (choice == "2"){
    var b1 = prompt("Enter the base: ");
    var h = prompt("Enter the height: ");
    var result2 = 1/2 * Number(b1) * Number(h);
    alert("The area of the triangle is " + result2); 
}

else if (choice == "3"){
    var r = prompt("Enter the radius: ");
    var result3 = 3.14 * Number(r) * Number(r);
    alert("The area of the circle is " + result3); 
}

else if (choice == "4"){
    var s = prompt("Enter the length of one side: ");
    var result4 = Number(s) * Number(s);
    alert("The area of the square is " + result4); 
}