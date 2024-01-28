function serialize(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  if (!root) return 'x';
  let result = '';
  if (root.val) result += root.val;
  result += ' ' + serialize(root.left);
  result += ' ' + serialize(root.right);
  return result;
}
