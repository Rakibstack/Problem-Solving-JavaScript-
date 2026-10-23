/**
 * Problem 1: Staircase
 */
// const staircase = function (n) {
//   let result = "";

//   for (let i = 1; i <= n; i++) {
//     const space = " ".repeat(n - i);
//     const hash = "#".repeat(i);

//     result += space + hash;

//     if (i < n) {
//       result += "\n";
//     }
//   }

//   return result;
// };

// console.log(staircase(4));

/**
 * Problem 2: Grading Students
 */
// const gradingStudents = function (grades) {
//   return grades.map((grade) => {
//     if (grade < 38) {
//       return grade;
//     }

//     const difference = 5 - (grade % 5);

//     if (difference < 3) {
//       return grade + difference;
//     }
//     return grade;
//   });
// };

// console.log(gradingStudents([84, 29, 57]));

/**
 * Problem 3: Time Conversion
 */

// const timeConversion = function (s) {
//   const period = s.slice(-2);
//   let hour = Number(s.slice(0, 2));
//   const rest = s.slice(2, 8);

//   if (period === "AM" && hour === 12) {
//     hour = 0;
//   } else if (period === "PM" && hour !== 12) {
//     hour += 12;
//   }

//   return String(hour).padStart(2, "0") + rest;
// };

// console.log(
//   timeConversion("12:00:00AM"),
//   timeConversion("12:00:00PM"),
//   timeConversion("01:00:00PM"),
//   timeConversion("11:59:59PM"),
//   timeConversion("01:00:00AM"),
// );

/**
 Problem 4: String Repeat
 */
// const repeatStr = function (n, s) {
//   let result = "";

//   for (let i = 0; i < n; i++) {
//     result += s;
//   }

//   return result;
// };
// console.log(repeatStr(3, "ha"));

/**
Problem 5: Reversed Strings
*/

// const solution = function (str) {
//   let result = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// };

// console.log(solution("hello"));
// console.log(solution(""));

/**
Problem 6: Sum of Positive
*/

// const positiveSum = function (arr) {
//   let sum = 0;

//   for (let num of arr) {
//     if (num > 0) {
//       sum += num;
//     }
//   }

//   return sum;
// };
// console.log(positiveSum([-1, -2, 0, -5]));

/**
Problem 7: Grasshopper — Summation
*/
// const summation = function (num) {
//   let sum = 0;

//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }

//   return sum;
// };

// console.log(summation(1));
// console.log(summation(5));
// console.log(summation(10));

//  Problem 8: Convert a Boolean to a String

// const booleanToString = function (b) {
//   return b ? "true" : "false";
// };
// console.log(booleanToString(true));

// Problem 9: Fizz Buzz
// const fizzBuzz = function (n) {
//   const result = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(String(i));
//     }
//   }

//   return result;
// };

// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));

// Problem 10: Running Sum of 1D Array
// const runningSum = function (nums) {
//   const result = [];
//   let sum = 0;

//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//     result.push(sum);
//   }

//   return result;
// };

// console.log(runningSum([1, 2, 3, 4]));
// console.log(runningSum([1, 1, 1]));
// console.log(runningSum([3, 1, 2, 10]));

// Problem 11: Richest Customer Wealth
// const maximumWealth = function (accounts) {
//   let maxWealth = 0;

//   for (let i = 0; i < accounts.length; i++) {
//     let currentWealth = 0;

//     for (let j = 0; j < accounts[i].length; j++) {
//       currentWealth += accounts[i][j];
//     }

//     if (currentWealth > maxWealth) {
//       maxWealth = currentWealth;
//     }
//   }

//   return maxWealth;
// };

// console.log(
//   maximumWealth([
//     [1, 2, 3],
//     [3, 2, 1],
//   ]),
// );
// console.log(
//   maximumWealth([
//     [1, 5],
//     [7, 3],
//     [3, 5],
//   ]),
// );
// console.log(
//   maximumWealth([
//     [2, 8, 7],
//     [7, 1, 3],
//     [1, 9, 5],
//   ]),
// );

// Problem 12: Remove Duplicates from Sorted Array

// const removeDuplicates = function (nums) {
//   let i = 0;

//   for (let j = 1; j < nums.length; j++) {
//     if (nums[j] !== nums[i]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }

//   return i + 1;
// };

// const nums = [1, 1, 2, 2, 3];
// const k = removeDuplicates(nums);

// console.log(k);
// console.log(nums.slice(0, k));

// Problem 13: Contains Duplicate

// const containsDuplicate = function (nums) {
//   const seen = new Set();

//   for (const num of nums) {
//     if (seen.has(num)) {
//       return true;
//     }

//     seen.add(num);
//   }

//   return false;
// };

// console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([5, 5]));
// console.log(containsDuplicate([]));

// Problem 14: Move Zeroes
// const moveZeroes = function (nums) {
//   let k = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[k] = nums[i];
//       k++;
//     }
//   }

//   while (k < nums.length) {
//     nums[k] = 0;
//     k++;
//   }
// };

// const nums = [0, 1, 0, 3, 12];

// moveZeroes(nums);

// console.log(nums);

// Problem 15: Merge Sorted Array
// const merge = function (nums1, m, nums2, n) {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }

//     k--;
//   }
// };

// const nums1 = [1, 2, 3, 0, 0, 0];
// const nums2 = [2, 5, 6];

// merge(nums1, 3, nums2, 3);

// console.log(nums1);

// Problem 16: 3Sum
// const threeSum = function (nums) {
//   nums.sort((a, b) => a - b);

//   const result = [];

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);

//         left++;
//         right--;

//         while (left < right && nums[left] === nums[left - 1]) {
//           left++;
//         }

//         while (left < right && nums[right] === nums[right + 1]) {
//           right--;
//         }
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }

//   return result;
// };

// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0, 0]));
// console.log(threeSum([0, 1, 1]));

// Problem 17: Plus One
// const plusOne = function (digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }

//     digits[i] = 0;
//   }

//   digits.unshift(1);
//   return digits;
// };

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([1, 2, 9]));
// console.log(plusOne([9, 9, 9]));

// Problem 18: Reverse String
// const reverseString = function (s) {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     const temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;

//     left++;
//     right--;
//   }
// };

// Problem 20: longestCommonPrefix(strs)
// const longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return "";

//   let prefix = strs[0];

//   for (let i = 1; i < strs.length; i++) {
//     while (!strs[i].startsWith(prefix)) {
//       prefix = prefix.slice(0, -1);

//       if (prefix === "") return "";
//     }
//   }

//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["apple", "apple", "apple"]))
