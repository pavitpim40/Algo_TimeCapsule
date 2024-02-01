function invertBinaryTree(tree) {
  // WRITE YOUR BRILLIANT CODE HERE
  if (!tree) return null;
  const node = new Node(tree.val);
  node.right = invertBinaryTree(tree.left);
  node.left = invertBinaryTree(tree.right);
  return node;
}
