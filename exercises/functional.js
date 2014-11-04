
var exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"

exercises.wheresWaldo = function(array) {
	_.each(array, function(value){
		if (value.indexOf("waldo") != -1){	
			return value;
			console.log(value);
			};
		return true;
		});
	};
  // TODO: implement me


// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()
exercises.largestNums = function(arrayOfNumberArrays) {
	var numArray = [];
	_.each(arrayOfNumberArrays, function(val){
		_.chain(arrayOfNumberArrays).max().map(function(val){
			numArray.push(val + 1);
			return val + 1;
		}).value();
	});
 };


  // TODO: implement me


// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
	_.filter(dates, function(num) {
		return (lowerBound < num > upperBound)
	});

  // TODO: implement me
};

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()
// exercises.TODO = function(array) {
// };

exercises.findBondActors = function(array) {
	bonds = _.reduce(bonds, function(memo, bond){
		if (bonds.movies >= 3){
			memo.push({
			bondName: bond.name,
			moviesPlayed: bond.movies
		});
	};
	return memo;
}, []);

module.exports = exercises;
