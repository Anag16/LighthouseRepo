/*this node script should print out passing grades to the console. Passing grades for this scenario can be those that are 70 or above.
Tips

    Use the Array filter function (as shown previously) to print out only the passing grades.
        Start by declaring the callback function and then later refactor it to be inline and anonymous, or start with an anonymous function to begin with.
    Convert the anonymous function into an arrow function in order to get some practice with them.*/





const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const scores = grades.filter(function(grades) {
    
  return (grades >= 70);
    
});
    
console.log("grades higher than 70", scores);