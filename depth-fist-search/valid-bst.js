function dfs(node, min, max) {
  if (!node) return true;
  if (!(min < node.val && node.val < max)) return false;

  let validLeftBST = dfs(node.left, min, node.val);
  let validRightBST = dfs(node.right, node.val, max);
  return validLeftBST && validRightBST;
}
function validBst(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  return dfs(root, -Infinity, Infinity);
}
