//leetcode.com/problems/binary-tree-preorder-traversal/
https: var preorderTraversal = function (root) {
  const arr = [];
  function treeTraverse(root) {
    if (!root) return;
    arr.push(root.val);
    treeTraverse(root.left);
    treeTraverse(root.right);
  }
  treeTraverse(root);
  return arr;
};

var preorderTraversal = function (root) {
  if (!root) return [];
  return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};
// ศึกษาวิธี Traverse โดยใช้ Stack เพิ่มเติมใน readme.md
