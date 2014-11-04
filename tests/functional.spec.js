var expect = require("../node_modules/chai/chai").expect,
    functional = require("../exercises/functional");

describe("Functional", function() {

  it("should find waldo", function() {
    var result = functional.wheresWaldo(
      "kitty star trek", "firefly rules",
      "waldorf salad", "read dune"
    );

    // use equal to compare primitives
    expect(result).to.equal("waldorf salad");
  });

  it("should find the largest numbers", function() {
    var testData = [ [ 1, 2 ],  [ 4, 10 ],  [ 15, 1, 3 ],  [ 0 ] ],
        result = functional.largestNums(testData);

    // use eql to compare objects
    expect(result).to.eql([ 2, 10, 15, 0 ]);
  });

  it("should return filtered dates", function() {
    var dateArray = [],
        lower = new Date("2001/01/01"),
        upper = new Date("2004/01/01"),
        answer, result;

    // create test data
    dateArray.push( new Date("2000/12/1") );
    dateArray.push( new Date("2001/12/1") );
    dateArray.push( new Date("2002/12/1") );
    dateArray.push( new Date("2003/12/1") );

    // expected result
    answer = [ dateArray[1], dateArray[2], dateArray[3] ];

    // call the method we're testing
    result = functional.filterDates(dateArray, lower, upper);

    expect(result).to.eql(answer);
  });

  // this test is pending because i didn't give it a
  // function argument.
  // TODO: write a test for the custom method you wrote
  // in exercises/functional.js
  it("should test the exercise you wrote yourself", function() {
    var bonds = [
    {name: "Sean Connery", start: 1962, movies: 7},
    {name: "David Niven", start: 1967, movies: 1},
    {name: "George Lazenby", start: 1969, movies: 1},
    {name: "Roger Moore", start: 1973, movies: 7},
    {name: "Timothy Dalton", start: 1987, movies: 2},
    {name: "Pierce Brosnan", start: 1995, movies: 4},
    {name: "Daniel Craig", start: 2006, movies: 3}]
    result = functional.findBondActors(bonds);

    answer = [
    {bondName: "Sean Connery", moviesPlayed: 7},
    {bondName: "Roger Moore", moviesPlayed: 7},
    {bondName: "Pierce Brosnan", moviesPlayed: 4},
    {bondName: "Daniel Craig", moviesPlayed: 3} 
    ]

    expect(result).to.eql(answer);

  });

});
