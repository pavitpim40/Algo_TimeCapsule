// function treeMaxDepth(root) {
//   // WRITE YOUR BRILLIANT CODE HERE
//   if (!root) return 0;
//   let left_dept = 0;
//   let right_dept = 0;

//   if (root.left) left_dept = 1 + treeMaxDepth(root.left);
//   if (root.right) right_dept = 1 + treeMaxDepth(root.right);
//   return Math.max(left_dept, right_dept);
// }

// //
// function dfs(root) {
//   if (root === null) return 0;
//   return Math.max(dfs(root.left), dfs(root.right)) + 1;
// }

function treeMaxDepth(root) {
  if (!root) return 0;

  let leftCount = 0;
  let rightCount = 0;
  leftCount += 1 + treeMaxDepth(root.left);
  rightCount += 1 + treeMaxDepth(root.rigth);

  return Math.max(leftCount, rightCount);
}
