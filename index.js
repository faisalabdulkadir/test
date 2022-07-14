//function takes two parameters: array of integer nums (nums) and an integer target(target)
function targetAddition(nums, target) {
  var sum,
    //declaring and initializing an empty array to store the final results
    result = [];
  //looping through all the elements of the array
  for (var i = 0; i < nums.length; i++) {
    sum = nums[i] + nums[i + 1];
    //checking if the two numbers added are equal to the target number
    if (sum === target) {
      //pushing the two numbers that meets our condition to the result array
      result.push(nums[i], nums[i + 1]);
    }
  }
  //returning the two numbers that add up to the target
  return result;
}

var nums = [2, 7, 11, 15, 8, 13];
var target = 21;
var addititon = targetAddition(nums, target);
console.log(addititon );
