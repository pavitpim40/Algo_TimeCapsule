// 2 : State ที่ต้องส่งไปคือค่าสูงสุดที่ส่งไป (Max So Far)
function countVisibleNode(root, maxSofar) {
  if (root == null) return 0;
  let total = 0;
  if (root.val >= maxSofar) total += 1;

  if (root.val > maxSofar) maxSofar = root.val;
  let cL = countVisibleNode(root.left, maxSofar);
  let cR = countVisibleNode(root.right, maxSofar);
  // 1 : state ที่ return คือค่า total
  return total + cL + cR;
}

function visibleTreeNode(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  return countVisibleNode(root, Number.NEGATIVE_INFINITY);
}
