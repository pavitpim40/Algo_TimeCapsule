// url https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3237/
var countDigit = function (num) {
  let count = 0;
  while (num >= 1) {
    num /= 10;
    count++;
  }
  return count;
};
var findNumbers = function (nums) {
  let count = 0;
  for (let n of nums) {
    digit = countDigit(n);
    if (digit % 2 === 0) count++;
  }
  return count;
};

// Other Lower Space
var findNumbers = function (nums) {
  let evenNumberOfDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    // check if the number has an event number of digits
    if ((Math.floor(Math.log10(num)) + 1) % 2 === 0) {
      evenNumberOfDigits++;
    }
  }
  return evenNumberOfDigits;

  /* 
	Another Method
	=======
	O(n * d) n-> 'n' is the length of nums. 'd' is the avarage numver of digits

	let evenNumberOfDigits = 0;
	for(let i=0; i<nums.length; i++){
			if(Math.floor(Array.from(String(nums[i]), Number).length % 2) === 0){
					evenNumberOfDigits++;
			}
	}
	return evenNumberOfDigits;

	*/
};
