/*
*์์*์*์*์*์*์ ์ NO: 2
❓ PROMPT
Given a square matrix *mat*, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal 
and all the elements on the secondary diagonal *that are not part of the primary diagonal*.

Example(s)
Input:
[[1,2,3], --> for the first row get the first elelement and the last element
 [4,5,6],  --> for the first row get the first elelement and the last element
 [7,8,9]]
 matrix[2][1]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Element mat[1][1] = 5 is counted only once.

Input:
[[1,1,1,1], left = 0, right = row.lenth -1
 [1,1,1,1], left = 0 +1, right = row.lenth -2
 [1,1,1,1], left = 0 +2, right = row.lenth -3
 [1,1,1,1]] left = 0 +3, right = row.lenth -4
Output: 8

Input: [[5]]
Output: 5
 
*/

function diagonalSum(matrix) {
  let dimension = matrix.length;
  let r = 0;

  let f = 0;
  let sum = 0;
  while (r < dimension) {
    sum += matrix[r][dimension - 1 - f] + matrix[r][f++];
    r++;
  }
  let mid = Math.floor(dimension / 2);
  if (matrix.length % 2 != 0) sum -= matrix[mid][mid];
  return sum;
}

var diagonalSum = function (mat) {
  const n = mat.length;
  const center = n >> 1; // n / 2 | 0 = Math.floor((left + right) / 2)
  // 2 >> 1 = 2 => 10 => 1
  // 3 << 1 = 11 => 110 => 6
  // 2 ^ 32
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i] + mat[n - 1 - i][i];
  }
  // 1 1 1
  // 0 0 0
  // 0 0 0 => false
  return n & 1 ? sum - mat[center][center] : sum;
};

function diagonalSum(matrix) {
  let n = matrix.length;
  let left = 0;
  let right = n - 1;
  let sum = 0;
  while (left < n) {
    sum += matrix[left][left];
    if (left !== right) {
      sum += matrix[left][right];
    }
    left++;
    right--;
  }
  return sum;
}
