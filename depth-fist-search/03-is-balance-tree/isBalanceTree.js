/*
 ** Solution-1
 */
function treeMaxDepth(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  if (!root) return 0;
  let left_dept = 0;
  let right_dept = 0;

  if (root.left) left_dept = 1 + treeMaxDepth(root.left);
  if (root.right) right_dept = 1 + treeMaxDepth(root.right);
  return Math.max(left_dept, right_dept);
}

function isBalanced(root) {
  if (!root) return true;
  let leftDepth = 0;
  let rigthDepth = 0;
  if (root.left) leftDepth = 1 + treeMaxDepth(root.left);
  if (root.right) rigthDepth = 1 + treeMaxDepth(root.right);
  let balanceTree = Math.abs(leftDepth - rigthDepth) <= 1;
  return balanceTree && isBalanced(root.left) && isBalanced(root.right);
}
